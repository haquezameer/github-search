import React from "react";

const options = ["Stars", "Forks", "Watchers"];
const ActionBar = () => (
  <div>
    <select name="sortby">
      {options.map(option => (
        <option key={option}>{option}</option>
      ))}
    </select>
  </div>
);

export default ActionBar;
