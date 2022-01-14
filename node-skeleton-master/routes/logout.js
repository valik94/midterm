const express = require('express');
const router  = express.Router();
const app = express();

const cookieSession = require('cookie-session');
app.use(cookieSession({
  name: 'session',
  keys: ['key1'],

  maxAge: 24 * 60 * 60 * 1000
}));

module.exports = (db) => {

  //If anything is missing in this POST route its probably missing passing it db.
  router.post("/", (req, res) => {
    req.session = null;
    res.redirect('/');
  });
  return router;
};
