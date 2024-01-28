// set up a express server
const express = require("express");
const PORT = process.env.PORT || 3000;
const cors = require("cors");

const app = express();
require("dotenv").config();

app.use(cors({}));

app.get("/", (req, res) => {
  res.send("Hello World");
});
// listen to port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
