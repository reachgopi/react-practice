import React, { useState } from "react";

//Refactored Controlled inputs code here
const MultipleInput = () => {
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [people, setPeople] = useState([]);
  const handleOnChange = (e) => {
    const nameVal = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [nameVal]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.age && person.email) {
      console.log("inside");
      const newPerson = { ...person, id: Date.now() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: "", age: "", email: "" });
    } else {
      console.log("else block");
    }
  };
  return (
    <>
      <div>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">FirstName:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleOnChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={person.email}
              onChange={handleOnChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age:</label>
            <input
              type="text"
              id="age"
              name="age"
              value={person.age}
              onChange={handleOnChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Add Person
          </button>
        </form>
        {people.map((person) => {
          const { id, firstName, email, age } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MultipleInput;
