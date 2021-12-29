import React, { useState } from "react";

const ControlledInput = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      console.log("inside valid email && firstName");
      let person = { id: Date.now(), firstName, email };
      //   setPeople((people) => {
      //     return [...people, person];
      //   });
      setPeople([...people, person]);
    } else {
      console.log("else empty");
    }
  };
  return (
    <>
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">FirstName:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <button type="submit">Add Person</button>
        </form>
        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ControlledInput;
