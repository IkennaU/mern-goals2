import React from "react";
import { useDispatch } from "react-redux";
import { deleteGoals } from "../features/goals/goalSlice";

const GoalItem = (props) => {
  const dispatch = useDispatch();
  const { goal } = props;
  const onClick = (e) => {
    e.preventDefault();
    dispatch(deleteGoals(goal._id));
  };
  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>
      <h2>{goal.text}</h2>
      <button onClick={onClick} className="close">
        X
      </button>
    </div>
  );
};

export default GoalItem;
