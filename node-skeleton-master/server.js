// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");
const bcrypt = require('bcrypt');
const cookieSession = require("cookie-session");
app.use(
  cookieSession({
    name: "session",
    keys: [
      "B62261B5-44EA-4AFD-9B84-AC6E025FCCDA",
      "B26C1923-F568-4F38-BC0B-39B469126487",
    ],
  })
);

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const widgetsRoutes = require("./routes/widgets");

const loginRoutes = require("./routes/login");
const logoutRoutes = require("./routes/logout");
const indexRoutes = require("./routes/index");


// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// app.use("/api/users", usersRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));

app.use("/users", usersRoutes);
app.use("/login", loginRoutes);
app.use("/logout", logoutRoutes);
app.use("/dashboard", indexRoutes);

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  res.render("homepage");
});


// app.get("/dashboard", (req, res) => {
//   res.send(status);
// });

// app.get("/generate-password", (req, res) => {
//   //connect to db and show the details in table
//   res.render("password-generator");
// });

// app.post("/generate-password", (req, res) => {
//   //connect to db and add the details into the  table
//   // send data through temlatevars = { id: xxx}
//   // redirect or render to dashboard
// });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

