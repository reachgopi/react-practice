import React from "react";
import { useState } from "react";

//useState accepts a default value and returns a handler to change in future
//Few conditions using hooks (hooks start with use)
// Hooks i.e... useState cannot be used inside a condition
// Hooks can be used within a Function name starts with uppercase like StateBasicExample not on stateBasicExample otherwise this error will be thrown by react (React component names must start with an uppercase letter.)
//
const StateBasicExample = () => {
  let [title, setTitle] = useState("React Advanced Example");
  const handleClick = () => {
    if (title === "React Advanced Example") {
      setTitle("Hello React Programmers");
    } else {
      setTitle("React Advanced Example");
    }
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default StateBasicExample;
