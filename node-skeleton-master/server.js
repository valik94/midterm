// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");
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

app.use(express.static("public")); //sets static directory if you want ot read images and JS. tells express that public folder is static (front-end browser programs). Don't treat as programs but use when needed

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users"); //users routes from users.js --> userRoutes is a function that is exported
const widgetsRoutes = require("./routes/widgets"); //widgets routes from widgets.js --> widgetsRoutes is a function that is exported

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own

/*
app.use convention ("route", function )
*/

app.use("/api/users", usersRoutes(db)); //usersRoutes is a function and when it runs it returns a function(db) --> usersRoutes returns a router.
app.use("/api/widgets", widgetsRoutes(db));
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  res.render("homepage");
});

app.post("/login", (req, res) => {
  res.render("dashboard");
});

app.get("/dashboard", (req, res) => {
  res.send(status);
});

app.get("/generate-password", (req, res) => {
  //connect to db and show the details in table
  res.render("password_gen");
});

app.post("/generate-password", (req, res) => {
  //connect to db and add the details into the  table
  // send data through temlatevars = { id: xxx}
  // redirect or render to dashboard
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

//QUERY to send data to database --> INSERT INTO
app.post("/passwords", (req, res) => {
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
