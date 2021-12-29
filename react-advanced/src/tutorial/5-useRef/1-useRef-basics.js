import React, { useEffect, useRef } from "react";

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const onSubmitHandle = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);
  };

  useEffect(() => {
    console.log("Inside effect");
    refContainer.current.focus();
  });
  return (
    <>
      <form className="form" onSubmit={onSubmitHandle}>
        <div>
          <input type="text" ref={refContainer}></input>
          <button type="submit">Add</button>
        </div>
        <div ref={divContainer}>Hello world</div>
      </form>
    </>
  );
};

export default UseRefBasics;
