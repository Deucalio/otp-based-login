// set up a express server
const express = require("express");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
require("dotenv").config();
app.use(bodyParser.json());

app.use(cors({}));

// Functions

const randomOTPGenerator = () => Math.floor(100000 + Math.random() * 900000);

// ______________

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/otp", (req, res) => {
  try {
    const { email } = req.body;
    console.log("Email:", email);

    const emailAlreadyExists = false; // Replace with your actual logic to check if the email exists
    if (!emailAlreadyExists) {
      const otp = randomOTPGenerator();
      res.status(201).json({ otp });
    } else {
      res.status(400).json({ message: "Email Already Exists" });
    }
  } catch (error) {
    console.error("Error generating OTP:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("req.body", req.body);

  // res.status(400).json({ message: "Invalid Credentials" });
  res.status(200).json({ id: 1, email,  name: "Hamad Ali", firstName: "Hamad", lastName: "Ali", store: "Shopify" });
});

// listen to port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
