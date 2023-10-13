import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { BsPlus } from "react-icons/bs";
import { BiSolidBook } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div class="container">
      <h2>Assignments for course {courseId}</h2>

      <ul class="nav">
        <li class="nav-item">
          <input
            class="form-control"
            type="text"
            placeholder="Search for Assignments"
          />
        </li>
        <li class="nav-item">
          <button class="btn btn-secondary">
            <BsPlus></BsPlus>
            Group
          </button>
        </li>
        <li class="nav-item">
          <button class="btn btn-danger">
            <BsPlus></BsPlus>
            Assignment
          </button>
        </li>
        <li class="nav-item">
          <select class="form-select">
            <option selected>
              <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            </option>
          </select>
        </li>
      </ul>

      <hr />

      <div
        className="list-group fw-bold"
        style={{ borderLeft: "2px solid green", borderRadius: "0px" }}
      >
        <li class="list-group-item list-group-item-secondary">
          <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
          <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
          <span class="text-body-secondary">Assignments</span>
          <div class="float-end d-inline-block">
            <span class="border border-success rounded-pill">40% of total</span>
            <BsPlus></BsPlus>
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
          </div>
        </li>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item "
          >
            <div class="d-flex">
              <div class="me-2 ">
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                <BiSolidBook class="" style={{ color: "green" }}></BiSolidBook>
              </div>
              <div>
                {assignment.title}
                <br />
                <span class="fw-normal ">{assignment.course}</span>
              </div>
              <div class="float-end" style={{ color: "green" }}>
                <AiFillCheckCircle></AiFillCheckCircle>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;
