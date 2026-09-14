const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    gender: {
      type: String,
    },
    age: {
      type: Number,
      min: 0,
    },
  },
  {
    timestamps: true,
  },
);

//const User = mongoose.model("User", userSchema);

module.exports = mongoose.model("User", userSchema);
