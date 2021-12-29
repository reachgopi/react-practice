import React, { useState, useEffect } from "react";
//UseEffect gets called every component render/re-render
const UseEffectBasicExample = () => {
  const [value, setValue] = useState(0);

  //   useEffect(() => {
  //     if (value >= 1) {
  //       // Conditional rendering
  //       document.title = `New Message(${value})`;
  //     }
  //   }, []); // Empty Dependency List which means that this won't be called after initial render

  useEffect(() => {
    if (value >= 1) {
      // Conditional rendering
      document.title = `New Message(${value})`;
    }
  }, [value]); // Passed the dependency variable so every time the variable value change this hook gets invoked

  return (
    <>
      <h2> UseEffect Basic Example</h2>
      <h3>{value}</h3>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click Me
      </button>
    </>
  );
};

export default UseEffectBasicExample;
