import React from "react";

const UseStateCounterExample = () => {
  let [value, setValue] = React.useState(0);
  return (
    <>
      <h3> Counter Value </h3>
      <h3> {value} </h3>
      <button type="button" className="btn" onClick={() => setValue(value + 1)}>
        Increase
      </button>
      <button type="button" className="btn" onClick={() => setValue(0)}>
        Reset
      </button>
      <button type="button" className="btn" onClick={() => setValue(value - 1)}>
        Decrease
      </button>
    </>
  );
};

export default UseStateCounterExample;
