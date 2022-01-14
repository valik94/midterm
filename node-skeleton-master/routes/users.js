/* All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */


const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

module.exports = (db) => {
  // get route to /
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then((data) => {
        const users = data.rows;
        res.json({ users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // get route to /id cookie session
  router.get("/:id", (req, res) => {
    const id = req.params.id;
    db.query(`SELECT * FROM users WHERE id = $1`, [id])
      .then((data) => {
        const user = data.rows[0];
        res.json({ users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // // Register new user POST route
  // router.post("/", (req, res) => {
  //   const user = req.body;
  //   user.password = bcrypt.hashSync(user.password, 12);
  //   db.addUser(user)
  //     .then((user) => {
  //       if (!user) {
  //         res.send({ error: "error" });
  //         return;
  //       }
  //       req.session.userId = user.id;
  //     })
  //     .catch((err) => res.send(err));
  // });

  // //Login
  // const login = function (email, password) {
  //   return db.getUserWithEmail(email).then((user) => {
  //     if (bcrypt.compareSync(password, user.password)) {
  //       return user;
  //     }
  //     return null;
  //   });
  // };
  // exports.login = login;
  // //LOGIN post route
  // router.post("/login", (req, res) => {
  //   const { email, password } = req.body;
  //   login(email, password)
  //     .then((user) => {
  //       if (!user) {
  //         res.send({ error: "error" });
  //         return;
  //       }
  //       req.session.userId = user.id;
  //       res.send({ user: { name: user.name, email: user.email, id: user.id } });
  //     })
  //     .catch((err) => res.send(err));
  // });

  // //Logout POST route
  // router.post("/logout", (req, res) => {
  //   //req.session.userId = null;
  //   req.session=null;
  //   //res.send({req});
  //   res.redirect('/');
  // });

<<<<<<< Updated upstream
  //registration post query to write registration DB and then to post to passwords
  router.post("/passwords", (req, res) => {
=======
  //REGISTRATION POST query to write registration DB and then to post to passwords
  router.post("/", (req, res) => {
>>>>>>> Stashed changes
    db.query(
      `INSERT INTO users (email, master_password, organisation_id, created_at)
    VALUES ($1,$2,$3,$4)`,
      [
        req.body.email,
        req.body.master_password,
        req.body.organisation_id,
        req.body.created_at,
      ]
    )
      .then((result) => {
        console.log(`result is:`, result);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(req.body.email);
    console.log(req.body.master_password);
    console.log(req.body.organisation_id);
    console.log(req.body.created_at);
    res.send("Hello Passwords Page");
  });

  return router;
};
