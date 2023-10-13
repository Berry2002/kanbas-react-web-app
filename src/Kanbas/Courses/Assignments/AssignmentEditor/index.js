import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { AiFillCheckCircle } from "react-icons/ai";

function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const params = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div class="container">
      {/* <pre>
        <code>{JSON.stringify(params, null, 2)}</code>
      </pre> */}

      <div class="d-inline-block float-end">
        <div class="fw-bold float-end">Published</div>
        <div class="float-end">
          <AiFillCheckCircle style={{ color: "green" }}></AiFillCheckCircle>
        </div>
      </div>
      <br />
      <hr />
      <div className="form-label">Assignment Name</div>
      <input value={assignment.title} className="form-control mb-2" />

      <hr />
      <div className="float-end">
        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn btn-danger"
        >
          Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-success me-2">
          Save
        </button>
      </div>
    </div>
  );
}

export default AssignmentEditor;
