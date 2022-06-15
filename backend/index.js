const express = require("express");
const app = express();

const connect = require("./config/db");
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  return res.send("Welcome to backend");
});

app.listen(port, async () => {
  await connect();
  console.log(`Listening on port${port}`);
});
