const express = require('express');
const res = require('express/lib/response');
const router  = express.Router();
const { emailExists, passwordValidator } = require("../helpers.js");


module.exports = (db) => {

  // router.post("/", (req, res) => {
  //   res.render("dashboard");
  // });
  router.get('/', (req, res) => {
    res.render('homepage')
  })

  router.post("/", (req, res) => {
    const { email, password } = req.body;

    if (!email) {
      res.send("Must provide email!");
      return;
    } else if (!password) {
      res.send("Must provide password!");
      return;
    }

    /* promise chain that will first check if the users email exists against our db and then validate their password
     * async error handling for when a username or password is invalid will happen in here - TODO */
    let validUserEmail = emailExists(email);
    validUserEmail.then((value) => {

      if (!value) {
        res.send("Email or Password is invalid!");
        throw new Error('email does not exist');
      } else {
        return passwordValidator(password, email);
      }
    }).then((value) => {

      if (!value) {
        res.send("Email or Password is invalid!");
        throw new Error('incorrect password');
      } else {
        req.session.user_id = value;
        // res.render('dashboard')
        res.json({status: "Success", redirect: '/'});
      }
    }).catch(error => {
      console.log(error);
    });
  });

  };
