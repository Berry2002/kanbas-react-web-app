import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import * as client from "./client";
function UserTable() {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const users = await client.users();
    setUsers(users);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  const navigate = useNavigate();
  const backToAcct = () => {
    navigate("/Kanbas/Account");
  };
  return (
    <div className="container">
      <h1>User List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={backToAcct}>
        Back to Account
      </button>
    </div>
  );
}
export default UserTable;
