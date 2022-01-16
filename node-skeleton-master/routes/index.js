const express = require('express');
const indexRoute = express.Router();
const app = express();
app.set("view engine", "ejs");
const { isAuthenticated, getPasswordsbyUsers, sortUserPasswords } = require("../helpers.js");

const cookieSession = require('cookie-session');
const db = require('../db/dbConn.js');
app.use(cookieSession({
  name: 'session',
  keys: ['key1'],

  maxAge: 24 * 60 * 60 * 1000
}));

/* GET route - query database for passwords related to user and organisation
   pass through templateVars into EJS file to render information for specific user/organisation */
indexRoute.get("/", (req, res) => {
  const id = req.session.user_id;
  const idIsExisting = isAuthenticated(id, db);
  idIsExisting.then((value) => {

    if (!value) { //if value is the user_id not found then redirect to login
      res.redirect('/login');
    } else { //if value found (otherwise)
      getPasswordsbyUsers(value, db) //getPasswords of user
      .then((passwordsByUser) => {
        const sortedpasswordsByUser = sortUserPasswords(passwordsByUser); // sorted passwords using helper function
        console.log('ALL THE PSWORDS HERE: ', sortedpasswordsByUser);
        const templateVars = { value: id, users: sortedpasswordsByUser }; //send to frontend sortedPasswords and id object
        res.render("index", templateVars); //render in index.ejs the object (templateVars) sent
      }).catch(error => {
        console.log(error) // in case of an error don't break but catch error
      });
    }
  })
});

module.exports = indexRoute;
