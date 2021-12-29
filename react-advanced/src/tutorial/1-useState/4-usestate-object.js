import React from "react";

// Using Object is little bit tricky need to use spread operator as shown below to make it work

const UseStateObjectExample = () => {
  let p = {
    name: "Gopinath",
    age: "36",
    message: "Learn React Advanced concepts",
  };
  let [person, setPerson] = React.useState(p);
  const updateObjHandler = () => {
    //setPerson("Some Randome Value"); //Check output notice object disappears which is not what we want
    if (person.message === "Learn React Advanced concepts") {
      setPerson({ ...person, message: "SomeRandomevalue" });
    } else {
      setPerson({ ...person, message: "Learn React Advanced concepts" });
    }
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>{person.message}</h4>
      <button type="button" className="btn" onClick={updateObjHandler}>
        Update Object
      </button>
    </>
  );
};

export default UseStateObjectExample;
