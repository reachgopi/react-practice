import React, { useState, useEffect } from "react";

const UseEffectFetch = () => {
  const [users, setUsers] = useState([]);

  const fetchGithubUsers = async () => {
    try {
      let response = await fetch("https://api.github.com/users");
      let json = await response.json();
      return json;
    } catch (err) {
      return err;
    }
  };
  useEffect(async () => {
    console.log("in useeffect");
    setUsers(await fetchGithubUsers());
  }, []);

  return (
    <>
      <h3>Github Users</h3>
      <ul className="users">
        {users.map((user) => {
          let { login, html_url, avatar_url, id } = user;

          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h3>{login}</h3>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
      ;
    </>
  );
};

export default UseEffectFetch;
