/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();


module.exports = (db) => {

//QUERY to send data to database --> INSERT INTO
app.post("/", (req, res) => {
  db.query(
    `INSERT INTO users (name, username, email, login_password, organization_id)
  VALUES ($1,$2,$3,$4, $5)`,
    [
      req.body.name,
      req.body.username,
      req.body.email,
      req.body.password,
      req.body.organization_id,
    ]
  )
    .then((result) => {
      console.log(`result rows [0] is:`, result.rows[0]);
      res.redirect('homepage')
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(req.body.name);
  console.log(req.body.username);
  console.log(req.body.email);
  console.log(req.body.password);
  console.log(req.body.organization_id);
  res.send("Hello Passwords Page");
});
};

  // router.get("/:id", (req, res) => {
  //   const id = req.params.id;
  //   db.query(`SELECT * FROM users WHERE id = $1`, [id])
  //     .then(data => {
  //       const user = data.rows;
  //       res.json({ users });
  //     })
  //     .catch(err => {
  //       res
  //         .status(500)
  //         .json({ error: err.message });
  //     });
  // });

  // // Register new user
  // router.post('/', (req, res) => {
  //   const user = req.body;
  //   user.password = bcrypt.hashSync(user.password, 12);
  //   db.addUser(user)
  //   .then(user => {
  //     if (!user) {
  //       res.send({error: "error"});
  //       return;
  //     }
  //     req.session.userId = user.id;
  //   })
  //   .catch(err => res.send(err));
  // });

  // //Login
  // const login =  function(email, password) {
  //   return db.getUserWithEmail(email)
  //   .then(user => {
  //     if (bcrypt.compareSync(password, user.password)) {
  //       return user;
  //     }
  //     return null;
  //   });
  // }
  // exports.login = login;

  // router.post('/login', (req, res) => {
  //   const {email, password} = req.body;
  //   login(email, password)
  //     .then(user => {
  //       if (!user) {
  //         res.send({error: "error"});
  //         return;
  //       }
  //       req.session.userId = user.id;
  //       res.send({user: {name: user.name, email: user.email, id: user.id}});
  //     })
  //     .catch(err => res.send(err));
  // });

  // //Logout
  // router.post('/logout', (req, res) => {
  //   req.session.userId = null;
  //   res.send({});
  // });

  // return router;

