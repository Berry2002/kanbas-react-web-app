import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import db from "../Database";
import CourseCard from "./CourseCard/CourseCard";

function Dashboard() {
  return (
    <div className="container row">
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses (24)</h2>
      <hr />
      <div class="card-container">
        {db.courses.map((course) => (
          <Link
            key={course._id}
            to={`/Kanbas/Courses/${course._id}`}
            className="list-group-item"
          >
            <CourseCard
              key={course._id}
              title={course.name}
              year={course.startDate}
              session={course._id}
            ></CourseCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
