import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="list-group">
      <div class="d-flex">
        <button class="btn btn-secondary">Collapse All</button>
        <button class="btn btn-secondary ">View Progress</button>
        <div class="drop-down">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <AiFillCheckCircle style={{ color: "green" }}></AiFillCheckCircle>
            Publish All
          </button>
          <ul class="dropdown-menu">
            <li>Publish All modules and items</li>
            <li>Publish modules only</li>
            <li>UnPublish All</li>
          </ul>
        </div>
        <button class="btn btn-danger">
          <BsPlus></BsPlus>
          Module
        </button>
      </div>

      <hr />

      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li
            key={index}
            className="list-group-item list-group-item-secondary mb-3 "
          >
            <h4>{module.name}</h4>
            <p>{module.description}</p>
            {module.lessons &&
              module.lessons.map((lesson, index) => (
                <div key={index}>
                  <h5>{lesson.name}</h5>
                  <p>{lesson.description}</p>
                </div>
              ))}
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;
