import React, { useState, useEffect } from "react";

//Shortcircuit to try the following operators inside JSX
// ||
// &&
// ?
const ShortCircuit = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState("");
  return (
    <>
      <h3>{title || "No title"}</h3>
      {title && <h3>{"&& hello world"}</h3>}
      {title ? <p> {title} </p> : <h4> working</h4>}
      <button
        className="btn"
        onClick={() => {
          if (!title) {
            setTitle("chummar paru da kanna");
          } else {
            if (title === "hello world") {
              setTitle("chummar paru da kanna");
            } else {
              setTitle("hello world");
            }
          }
        }}
      >
        Toggle
      </button>
    </>
  );
};

export default ShortCircuit;
