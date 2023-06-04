const mongoose = require("mongoose");

const userModel = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    pic: {
      type: String,
      required: true,
      default:
        // "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        "https://img.freepik.com/premium-vector/avatar-profile-icon_188544-4755.jpg?w=740",
    },
  },
  {
    timestamp: true,
  }
);

const User = mongoose.model("User", userModel);

module.exports = User;
