const express = require('express');
const router  = express.Router();


module.exports = (db) => {

  //Logout
  router.post('/', (req, res) => {
    req.session.userId = null;
    res.send({});
  });
  return router;
};
