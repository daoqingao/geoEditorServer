const express = require("express"),
app = express(),
port = process.env.PORT || 9000,
cors = require("cors");

app.use(cors());
app.listen(port, () => console.log("Backend server live on " + port));

app.get("/", (req, res) => {
  res.send({ message: "Hello" })
});

app.get("/home", (req, res) => {
  res.send({ message: "home" })
});
