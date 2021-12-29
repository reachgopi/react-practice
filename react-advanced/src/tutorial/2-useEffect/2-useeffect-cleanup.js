import React, { useEffect, useState } from "react";

const UseEffectCleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);

  const updateSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    return () => {
      console.log("cleanup function");
      window.removeEventListener("resize", updateSize);
    };
  });

  return (
    <>
      <h2>UseEffect CleanUp</h2>
      <h3>Window Size</h3>
      <h3>{size}</h3>
    </>
  );
};

export default UseEffectCleanUp;
