import React from "react";
import { peopleData } from "../../data/peopleData";
import "./../../index.css";

const UseStateArrayExample = () => {
  let [people, setPeople] = React.useState(peopleData);
  const removeElement = (id) => {
    let newPeople = people.filter((p) => p.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      {people.map((p) => {
        return (
          <div key={p.id} className="item">
            <h1>{p.name}</h1>
            <button type="button" onClick={() => removeElement(p.id)}>
              Remove
            </button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={() => setPeople([])}>
        Clear All
      </button>
    </>
  );
};

export default UseStateArrayExample;
