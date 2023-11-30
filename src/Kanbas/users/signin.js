import * as client from "./client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const signin = async () => {
    if (credentials.username === "" || credentials.password === "") {
      alert("please enter username and password");
    } else {
      await client.signin(credentials);
      navigate("/Kanbas/account");
    }
  };
  const signup = async () => {
    navigate("/Kanbas/signup");
  };
  return (
    <div className="container">
      <h1>Signin</h1>
      <div>
        <input
          className="form-control mb-2"
          placeholder="username"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
        />
        <input
          className="form-control mb-2"
          placeholder="password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <button className="btn btn-primary" onClick={signin}>
          Signin
        </button>
        <button className="btn btn-warning ms-2" onClick={signup}>
          Signup
        </button>
      </div>
    </div>
  );
}
export default Signin;
