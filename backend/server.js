const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

var cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send({ data: [{ id: "1", name: "kim" }] });
});

app.listen(port, function () {
  console.log(`Running on port ${port}`);
});
