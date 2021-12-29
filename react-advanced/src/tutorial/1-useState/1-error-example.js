import React from "react";

// Example shows the react rerender not happening on change of variable values
// Shows importance of using hooks
const ErrorExample = () => {
  let title = "React Example";
  const handleClick = () => {
    console.log("inside handleClick");
    title = "Hello world";
    console.log("updated title", title);
  };
  return (
    <React.Fragment>
      <h2> {title}</h2>
      <button type="button" onClick={handleClick}>
        Change Heading
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
