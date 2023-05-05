const expressAsyncHandler = require("express-async-handler");

// @desc  Get Goals
// @route Get /api/goals
// @access Private
const getGoals = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

// @desc  Set Goals
// @route Post /api/goals
// @access Private
const setGoals = expressAsyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please Add A Text Field");
  }
  res.status(200).json({ message: "Set Goals" });
});

// @desc  Update Goals
// @route Put /api/goals/:id
// @access Private
const updateGoals = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Goals ${req.params.id}` });
});

// @desc  Delete Goals
// @route Delete /api/goals/:id
// @access Private
const deleteGoals = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Goals ${req.params.id}` });
});

module.exports = { getGoals, setGoals, updateGoals, deleteGoals };
