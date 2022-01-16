const express = require("express");
const router = express.Router();

//POST ROUTE -this is the new users registration post route that stores new users registered in the form to the database
module.exports = (db) => {
  router.post("/", (req, res) => {
    console.log('REQ.BODY = ',req.body);
    db.query(
      `INSERT INTO users (email, master_password, organisation_id, created_at)
    VALUES ($1,$2,$3,$4)`,
      [
        req.body.email,
        req.body.password,
        req.body.organisation_id,
        req.body.date,
      ]
    )
    .then(() => {
      db.query(
        `INSERT INTO users_organisations (user_id, organisation_id)
      SELECT id, organisation_id FROM users WHERE email = $1`,
      [req.body.email]
      )
    })

      .then((result) => {
        console.log(`result is:`, result);
      })
      .then((res) => {
        console.log("RES", res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(req.body.email);
    console.log(req.body.password);
    console.log(req.body.organisation_id);
    console.log(req.body.date);
    res.send("Hello Passwords Page");
  });

  return router;
};
