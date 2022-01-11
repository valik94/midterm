// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");

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

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  res.render("homepage");
});

app.post("/login", (req, res) => {
  res.send("hello");
});

app.get("/generate-password", (req, res) => {
  res.render("password-generator");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

//QUERY to send data to database --> INSERT INTO
app.post("/passwords", (req,res) =>{
  db.query(`INSERT INTO users (name, username, email, login_password, organization_id)
  VALUES ($1,$2,$3,$4, $5)`,[req.body.name, req.body.username,req.body.email, req.body.password, req.body.organization_id])
  .then((result)=>{
    console.log(result);
  })
  .catch((err)=>{
    console.log(err);
  })
  console.log(req.body.name);
  console.log(req.body.username);
  console.log(req.body.email);
  console.log(req.body.password);
  console.log(req.body.organization_id);
  res.send("Hello Passwords Page");
});

