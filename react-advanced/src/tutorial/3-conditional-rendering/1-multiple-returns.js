import React, { useState, useEffect } from "react";

const MultipleReturnComp = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    setTimeout(async () => {
      const api_url = "https://api.github.com/users/mojombo";
      let resp = await fetch(api_url);
      console.log(resp.status);
      if (resp.status >= 200 && resp.status <= 299) {
        console.log("inside else");
        let json = await resp.json();
        const { login, url, id } = json;
        let user = {
          login: login,
          url: url,
          id: id,
        };
        setUser(user);
        setIsLoading(false);
      } else {
        console.log("inside error");
        setIsLoading(false);
        setIsError(true);
      }
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <>
        <h3>Loading ...</h3>
      </>
    );
  }
  if (isError) {
    return (
      <>
        <h3> Error Occurred ...</h3>
      </>
    );
  }

  return (
    <>
      <ul className="user">
        <li id={user.id}>
          <h3>{user.login}</h3>
          <a href={user.url}>{user.login}</a>
        </li>
      </ul>
    </>
  );
};

export default MultipleReturnComp;
