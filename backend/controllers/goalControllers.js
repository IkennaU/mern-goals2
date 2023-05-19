const expressAsyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");
const User = require("../models/userModel");

// @desc  Get Goals
// @route Get /api/goals
// @access Private
const getGoals = expressAsyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  res.status(200).json(goals);
});

// @desc  Set Goals
// @route Post /api/goals
// @access Private
const setGoals = expressAsyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please Add A Text Field");
  }
  const goals = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });
  res.status(200).json(goals);
});

// @desc  Update Goals
// @route Put /api/goals/:id
// @access Private
const updateGoals = expressAsyncHandler(async (req, res) => {
  const goals = await Goal.findById(req.params.id);
  if (!goals) {
    res.status(400);
    throw new Error("Goal Not Found");
  }

  if (!req.user) {
    res.status(401);
    throw new Error("User Not Found");
  }
  if (goals.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User Not Authorised");
  }
  const updateGoals = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updateGoals);
});

// @desc  Delete Goals
// @route Delete /api/goals/:id
// @access Private
const deleteGoals = expressAsyncHandler(async (req, res) => {
  const goals = await Goal.findById(req.params.id);
  if (!goals) {
    res.status(400);
    throw new Error("Goal Not Found");
  }
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User Not Found");
  }
  if (goals.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User Not Authorised");
  }

  await Goal.findByIdAndDelete(req.params.id);
  res.json({ id: req.params.id });
});

module.exports = { getGoals, setGoals, updateGoals, deleteGoals };
