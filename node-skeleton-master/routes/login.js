const express = require('express');
const app = express();
const loginRoute = express.Router();
const { isAuthenticated, emailExists, passwordValidator } = require("../helpers.js");

/* require and use cookie session to store user ids for cookie sessions
 * https://www.npmjs.com/package/cookie-session */
const cookieSession = require('cookie-session');
const db = require('../db/dbConn.js');
app.use(cookieSession({
  name: 'session',
  keys: ['key1'],

  maxAge: 24 * 60 * 60 * 1000
}));


/* GET route FOR LOGIN page authentication*/
loginRoute.get("/", (req, res) => {
  const id = req.session.user_id;
  const idIsExisting = isAuthenticated(id, db); //perform authentication based on user id
  idIsExisting.then((value) => {

    if (value) {
      res.redirect('/index'); //if user in db redirect to index (homepage)
    }
    const templateVars = {value: false};

  res.render('login', templateVars) //else redirect to login page to login/register
})
});

/* POST route
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
   syncronous error handling before our promise chain below even starts */
loginRoute.post("/", (req, res) => {
  const { email, password } = req.body;
  const errors = {
    email: "Must provide email!",
    password: "Must provide password!",
    emailOrPwinvalid: "Email or Password is invalid!",
  };

  if (!email) {
    res.send(errors.email);
    return;
  } else if (!password) {
    res.send(errors.password);
    return;
  }

  /* promise chain that will first check if the users email exists against our db and then validate their password
   * async error handling for when a username or password is invalid will happen in here */
  let validUserEmail = emailExists(email, db);
  validUserEmail.then((value) => { //helper password and email validation function follow

    if (!value) {
      res.send(errors.emailOrPwinvalid);
      throw new Error('email does not exist');
    } else {
      return passwordValidator(password, email, db);
    }
  }).then((value) => {

    if (!value) {
      res.send(errors.emailOrPwinvalid);
      throw new Error('password does not exist');
    } else {
      req.session.user_id = value;
      res.json({status: "Success", redirect: '/'});
    }
  }).catch(error => {
    console.log(error);
  });
});

module.exports = loginRoute;
