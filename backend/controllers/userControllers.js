const bcrypt = require("bcryptjs");
const expressAsyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

// @desc  Register New User
// @route POST /api/users
// @access Public
const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  // check for required fields
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Add Required Fields");
  }
  // check if the user exists for validity
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }
  // Encrypt Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // create User
  const user = await User.create({ name, email, password: hashedPassword });
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

// @desc  Authenticate A User
// @route POST /api/users
// @access Public
const loginUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // check authenticity of logged in user
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Username Or Password");
  }
});

// @desc  Get User Data
// @route GET /api/users/me
// @access Public
const getMe = expressAsyncHandler(async (req, res) => {
  const { _id, name, email } = await User.findById(req.user.id);
  res.status(200).json({ id: _id, name, email });
});

module.exports = { registerUser, loginUser, getMe };
