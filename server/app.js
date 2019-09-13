const express = require("express");
const app = express();
const data = require("./data");

const hostname = "localhost";
const port = 3035;

app.get("/products", function(req, res) {
  res.send(data);
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(port);

console.log(`[Server running on ${hostname}:${port}]`);
