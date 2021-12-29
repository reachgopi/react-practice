import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <>
      <h3> Show Hide </h3>
      <button
        className="btn"
        onClick={() => {
          setIsToggle(!isToggle);
        }}
      >
        Show/Hide
      </button>
      {isToggle && <DemoComp />}
    </>
  );
};

const DemoComp = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const resize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <div>
        <h2>Demo component</h2>
        <h3> Window width</h3>
        <h4>{width}</h4>
      </div>
    </>
  );
};

export default ShowHide;
