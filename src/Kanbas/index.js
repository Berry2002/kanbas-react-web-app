import Signin from "./users/signin";
import Signup from "./users/signup";
import Account from "./users/account";
import UserTable from "./users/table";
import React, { useEffect } from "react";
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Courses";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const URL = "https://kanbas-node-server-app-i1az.onrender.com/api/courses";
  // "http://localhost:4000/api/courses";
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div>
          <Routes>
            <Route path="/" element={<Signin />} />
            {/* <Route path="Account" element={<h1>Account</h1>} /> */}
            <Route path="Dashboard" element={<Dashboard />} />
            <Route
              path="Courses/:courseId/*"
              element={<Courses courses={courses} />}
            />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/account" element={<Account />} />
            <Route path="/account/:id" element={<Account />} />
            <Route path="/users" element={<UserTable />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
