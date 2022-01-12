const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    let query = `SELECT * FROM organizations`;
    console.log(query);
    db.query(query)
      .then(data => {
        const organizations = data.rows;
        res.json({ organizations });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
