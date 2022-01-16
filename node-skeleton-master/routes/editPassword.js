const express = require('express');
const app = express();
const editPasswordRoute = express.Router();
const { editPasswordFromDb, getEditedPassword } = require("../helpers.js");


/* require and use cookie session to store user ids for cookie sessions
 * https://www.npmjs.com/package/cookie-session */
 const cookieSession = require('cookie-session');
const db = require('../db/dbConn.js');
 app.use(cookieSession({
   name: 'session',
   keys: ['key1'],

   maxAge: 24 * 60 * 60 * 1000
 }));
 module.exports = (db) => {

// POST route to edit passwords upon click action, sends password text to helper.js function and returns the edited string and sends to db for storage
editPasswordRoute.post("/", (req, res) => {
  const buttonId = req.body.clicked_button;
  const passwordText = req.body.password_text;
  console.log("passwordText", passwordText);
  let editedPassword = editPasswordFromDb(buttonId, passwordText, db);
  editedPassword.then(() => {
    return getEditedPassword(buttonId, db);
  }).then((value) => {
    const updatedPassword = value;
    res.send(updatedPassword.rows[0].password_text) //send updatedPassword to front-end as password_text
  });
});
return editPasswordRoute;
}
