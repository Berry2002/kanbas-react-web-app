import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const signup = async () => {
    if (credentials.username === "" || credentials.password === "") {
      alert("Username and password cannot be empty!");
    } else {
      await client.signup(credentials);
      navigate("/Kanbas/account");
    }
  };
  return (
    <div className="container">
      <h1>Signup</h1>
      {error && <div>{error}</div>}
      <input
        className="form-control mb-2"
        value={credentials.username}
        placeholder="username"
        onChange={(e) =>
          setCredentials({
            ...credentials,
            username: e.target.value,
          })
        }
      />
      <input
        className="form-control mb-2"
        placeholder="password"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({
            ...credentials,
            password: e.target.value,
          })
        }
      />
      <button className="btn btn-primary" onClick={signup}>
        Signup
      </button>
    </div>
  );
}
export default Signup;
