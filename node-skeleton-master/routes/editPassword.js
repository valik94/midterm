const express = require('express');
const app = express();
const editPasswordRoute = express.Router();
const { editPasswordFromDb, getEditedPassword } = require("../helpers.js");


/* require and use cookie session to store user ids for cookie sessions
 * https://www.npmjs.com/package/cookie-session */
 const cookieSession = require('cookie-session'); //import cookie session
 app.use(cookieSession({ //set random key and value for cooie
   name: 'session',
   keys: ['key1'],

   maxAge: 24 * 60 * 60 * 1000
 }));

// POST route
editPasswordRoute.post("/", (req, res) => { //create post route for editPassword
  const buttonId = req.body.clicked_button; //target clicked_button key upon request.body.clicked_button store value in buttonId
  const passwordText = req.body.password_text; //target password_text and store its value in passwordText
  console.log("passwordText", passwordText);
  let editedPassword = editPasswordFromDb(buttonId, passwordText); //passed to helper function and returns the query result from DB table users where email=userEmail
  editedPassword.then(() => { //created a promise on the returned value
    return getEditedPassword(buttonId); //return query from DB table users DB table users where email=userEmail
  }).then((value) => {
    const updatedPassword = value; //assign this value to updatedPassword
    res.send(updatedPassword.rows[0].password_text) //send to browser updatedPassword.rows[0].password_text
  });
});

module.exports = editPasswordRoute;
