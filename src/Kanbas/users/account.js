import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
function Account() {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };

  const fetchAccount = async (id) => {
    try {
      if (id) {
        const account = await client.findUserById(id);
        setAccount(account);
        console.log(account);
      } else {
        const account = await client.account();
        setAccount(account);
      }
    } catch (err) {
      navigate("/login");
    }
  };

  const [courses, setCourses] = useState([]);
  // const fetchCourses = async () => {
  //   const courses = await client.findCoursesByAuthor();
  //   setCourses(courses);
  // };

  const navigate = useNavigate();

  const save = async () => {
    console.log("account: " + account.id);
    await client.updateUser(account);
  };

  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/signin");
  };

  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
  }, []);

  return (
    <div className="container">
      <h1>Account</h1>
      {account && (
        <div>
          <div className="form-group">
            <label>Username:</label>
            <input
              className="form-control mb-2"
              value={account.password}
              onChange={(e) =>
                setAccount({ ...account, password: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>First name:</label>
            <input
              className="form-control mb-2"
              value={account.firstName}
              onChange={(e) =>
                setAccount({ ...account, firstName: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Last name:</label>
            <input
              className="form-control mb-2"
              value={account.lastName}
              onChange={(e) =>
                setAccount({ ...account, lastName: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Date of Birth:</label>
            <input
              className="form-control mb-2"
              value={account.dob}
              onChange={(e) => setAccount({ ...account, dob: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              className="form-control mb-2"
              value={account.email}
              onChange={(e) =>
                setAccount({ ...account, email: e.target.value })
              }
            />
            <div className="form-group">
              <label>role:</label>
              <select
                className="form-control form-select mb-2"
                onChange={(e) =>
                  setAccount({ ...account, role: e.target.value })
                }
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </div>
          </div>
          <button className="btn btn-primary w-100 mb-2" onClick={save}>
            Save
          </button>
          <button className="btn btn-danger w-100 mb-2" onClick={signout}>
            Signout
          </button>
          <Link to="/Kanbas/users" className="btn btn-warning w-100">
            All Users
          </Link>
        </div>
      )}
    </div>
  );
}
export default Account;
