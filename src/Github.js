import React, { useEffect, useState } from "react";
import GithubApi from "./GithubApi";

const Github = () => {
  const [user, setUser] = useState([]);
  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    setUser(data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h1>List of github user</h1>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {user.map((currEle) => {
            return (
              <div>
                <div className="col-10 col-md-4 mt-5" key={currEle.id}>
                  <div className="card p-2">
                    <div className="d-flex align-items-center">
                      <div className="image">
                        {" "}
                        <img src={currEle.avatar_url} className="rounded" width="155" />{" "}
                      </div>
                      <div className="ml-3 w-100">
                        <h4 className="mb-0 mt-0 textLeft">{currEle.login} </h4>
                        {/* <span className="text-left">{type }</span> */}
                        <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                          <div className="d-flex flex-column">
                            <span className="articles"></span>{" "}
                            <span className="number1">38</span>{" "}
                          </div>
                          <div className="d-flex flex-column">
                            <span className="followers"></span>{" "}
                            <span className="number2">980</span>{" "}
                          </div>
                          <div className="d-flex flex-column">
                            <span className="rating">Rating</span>{" "}
                            <span className="number3">8.9</span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Github;
