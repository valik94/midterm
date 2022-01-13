const express = require('express');
const router  = express.Router();
const { isAuthenticated, getPasswordsbyUsers, sortUserPasswords } = require("../helpers.js");


module.exports = (db) => {

/* GET route - query database for passwords related to user and organisation
   pass through templateVars into EJS file to render information for specific user/organisation */
   router.get("/", (req, res) => {
    const id = req.session.user_id;
    const idIsExisting = isAuthenticated(id);
    idIsExisting.then((value) => {

      if (!value) {
        res.redirect('/login');
      } else {
        getPasswordsbyUsers(value)
        .then((passwordsByUser) => {
          const sortedpasswordsByUser = sortUserPasswords(passwordsByUser);
          console.log('ALL THE PASSWORDS HERE: ', sortedpasswordsByUser);
          const templateVars = { value: id, users: sortedpasswordsByUser };
          res.render("dashboard", templateVars);
        }).catch(error => {
          console.log(error)
        });
      }
    })
  });
  };
