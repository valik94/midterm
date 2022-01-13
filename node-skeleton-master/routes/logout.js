const express = require('express');
const router  = express.Router();


module.exports = (db) => {

  //Logout
  router.post('/', (req, res) => {
    req.session = null;
    res.redirect('/');
  });
  return router;
};
