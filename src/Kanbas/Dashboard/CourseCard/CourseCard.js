import React from "react";
import { FaBook } from "react-icons/fa";
import "./index.css";
function CourseCard({ title, year, session }) {
  return (
    <div className="card fixed-card">
      <img src="../../../favicon.ico" class="card-img-top" alt="..." />
      <div className="card-body">
        <p className="course-title">{title}</p>
        <h5 className="course-year">{year}</h5>
        <p className="course-session">{session}</p>
        <FaBook></FaBook>
      </div>
    </div>
  );
}

export default CourseCard;
