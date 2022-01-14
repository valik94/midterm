const express = require('express');
const router  = express.Router();
const { isAuthenticated, getPasswordsByUsers, sortUserPasswords } = require("../helpers.js");


module.exports = (db) => {

/* GET route - query database for passwords related to user and organisation
   pass through templateVars into EJS file to render information for specific user/organisation */
   router.get("/", (req, res) => {
    const id = req.session.user_id;
    const idIsExisting = isAuthenticated(id, db);
    idIsExisting.then((value) => {

      if (!value) {
        res.redirect('/login');
      } else {
        getPasswordsByUsers(value, db)
        .then((passwordsByUser) => {
          const sortedpasswordsByUser = sortUserPasswords(passwordsByUser, db);
          console.log('ALL THE PASSWORDS HERE: ', sortedpasswordsByUser);
          const templateVars = { value: id, users: sortedpasswordsByUser };
          res.render("dashboard", templateVars);
        }).catch(error => {
          console.log(error)
        });
      }
    })
  });
  return router;
  };
