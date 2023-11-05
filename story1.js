// setting up
const mongoose = require("mongoose");

const userAccountSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  description: String,
  firstName: String,
  lastName: String,
});

const UserAccount = mongoose.model("UserAccount", userAccountSchema);

module.exports = UserAccount;

const UserAccount = require("./models/UserAccount"); // Assuming this is the path to your schema

// Creating new user acc
const newUser = new UserAccount({
  userName: "john_doe",
  email: "john.doe@example.com",
  description: "Administrator",
  firstName: "John",
  lastName: "Doe",
});

// Save user acc to database
newUser.save((error, savedUser) => {
  if (error) {
    console.error(error);
  } else {
    console.log("User account saved:", savedUser);
  }
});
