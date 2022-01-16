const express = require("express");
const app = express();
const deletePasswordRoute = express.Router();
const { deletePasswordFromDb } = require("../helpers.js");


/* require and use cookie session to store user ids for cookie sessions
 * https://www.npmjs.com/package/cookie-session */
const cookieSession = require("cookie-session");
app.use(
  cookieSession({
    name: "session",
    keys: ["key1"],

    maxAge: 24 * 60 * 60 * 1000,
  })
);
module.exports = (db) => {
// POST route to delete password on same page
deletePasswordRoute.post("/", (req, res) => {
  const buttonId = req.body.clicked_button;
  deletePasswordFromDb(buttonId, db);
  res.send(buttonId);
});
return deletePasswordRoute;
}

