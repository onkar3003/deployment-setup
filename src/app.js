const express = require("express");

const bodyParser = require("body-Parser");

const app = express();
const port = process.env.PORT|| 3000
// app.use(bodyParser());
app.get("/", (req, res) => {
  res.send({ messgae: "welcome to weather services center" });
});
app.listen(port, () => {
  console.log(`app started listing on port ${port}`);
});
