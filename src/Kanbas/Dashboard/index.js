import { React } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard/CourseCard";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <div className="container row">
      <h1>Dashboard</h1>
      <div className="d-flex justify-content-between col-12">
        <div className="mb-3 col-6">
          <input
            value={course.name}
            className="form-control"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <input
            value={course.number}
            className="form-control"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />
          <input
            value={course.startDate}
            className="form-control"
            type="date"
            onChange={(e) =>
              setCourse({ ...course, startDate: e.target.value })
            }
          />
          <input
            value={course.endDate}
            className="form-control"
            type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
          />
        </div>
        <div>
          <button className="btn btn-primary" onClick={updateCourse}>
            Update
          </button>
          <button className="btn btn-success" onClick={addNewCourse}>
            Add
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
