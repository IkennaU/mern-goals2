const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, required: [true, "Please Add A Name"] },
    email: {
      type: String,
      unique: true,
      required: [true, "Please Add An Email"],
    },
    password: { type: String, required: [true, "Please Add A Password"] },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
