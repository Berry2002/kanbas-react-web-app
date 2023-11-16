import { React, useState, useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard/CourseCard";
import * as client from "../Courses/client";

function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({});
  const fetchCourses = async () => {
    const courses = await client.fetchCourses();
    setCourses(courses);
  };

  const deleteCourse = async (id) => {
    try {
      await client.deleteCourse(id);
      setCourses(courses.filter((course) => course._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const updateCourse = async () => {
    try {
      await client.updateCourse(course);
      setCourses(courses.map((c) => (c._id === course._id ? course : c)));
    } catch (error) {
      console.log(error);
    }
  };

  const addCourse = async () => {
    const newCourse = await client.addCourse(course);
    setCourses([newCourse, ...courses]);
  };

  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <div className="container row">
      <h1>Dashboard</h1>
      <div className="d-flex justify-content-between col-12">
        <div className="mb-3 col-6">
          <input
            placeholder="course name"
            type="text"
            className="form-control"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <input
            placeholder="course number"
            type="text"
            className="form-control"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />
          <input
            className="form-control"
            type="date"
            onChange={(e) =>
              setCourse({ ...course, startDate: e.target.value })
            }
          />
          <input
            className="form-control"
            type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
          />
        </div>
        <div>
          <button className="btn btn-success" onClick={addCourse}>
            Add
          </button>
          <button className="btn btn-primary" onClick={updateCourse}>
            Update
          </button>
        </div>
      </div>

      <hr />
      <h2>Published Courses (24)</h2>
      <hr />
      <div class="card-container">
        {courses.map((course) => (
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
              deleteCourse={deleteCourse}
            ></CourseCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
