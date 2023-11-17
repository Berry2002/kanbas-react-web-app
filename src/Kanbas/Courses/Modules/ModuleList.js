import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./service";
import { findModulesForCourse, createModule } from "./service";

function ModuleList() {
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const { courseId } = useParams();
  useEffect(() => {
    findModulesForCourse(courseId).then((modules) =>
      dispatch(setModules(modules))
    );
  }, [courseId]);
  
  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

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
      </div>

      <hr />
      <li className="list-group-item">
        <div className="d-flex justify-content-between ">
          <div className="d-flex flex-column">
            <input
              class="form-control"
              value={module.name}
              onChange={(e) =>
                dispatch(setModule({ ...module, name: e.target.value }))
              }
            />
            <textarea
              class="form-control"
              value={module.description}
              onChange={(e) =>
                dispatch(setModule({ ...module, description: e.target.value }))
              }
            />
          </div>
          <div>
            <button className="btn btn-primary" onClick={handleUpdateModule}>
              Update
            </button>
            <button className="btn btn-success" onClick={handleAddModule}>
              Add
            </button>
          </div>
        </div>
      </li>

      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li
            key={index}
            className="list-group-item list-group-item-secondary mb-3 "
          >
            <div className="d-flex justify-content-between">
              <h4>{module.name}</h4>
              <div>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteModule(module._id)}
                >
                  Delete
                </button>
                {/* <button
                  className="btn btn-success"
                  onClick={() => dispatch(setModule(module))}
                >
                  Edit
                </button> */}
              </div>
            </div>
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
