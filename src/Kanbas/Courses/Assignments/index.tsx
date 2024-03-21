import React, { useState } from "react";
import { FaCheckCircle, FaTrash, FaEdit, FaGripVertical, FaEllipsisV, FaPlus, FaRegEdit, FaCaretDown, FaTimes } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./assignmentsReducer";
import "./index.css";
import { FaEllipsisVertical, FaRegCircleCheck } from "react-icons/fa6";

function Assignments() {
  const { courseId } = useParams();
  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
  const dispatch = useDispatch();
  const courseAssignments = assignments.filter((assignment: any) => assignment.course === courseId);
  const [showConfirmation, showDialog] = useState(false);
  const [assignmentIdToDelete, setIdtoDelete] = useState(null);

  const handleDelete = (id: any) => {
    setIdtoDelete(id);
    showDialog(true);
  };

  const confirmationDialog = () => {
    dispatch(deleteAssignment(assignmentIdToDelete));
    showDialog(false);
    setIdtoDelete(null);
  };

  const cancelDelete = () => {
    showDialog(false);
    setIdtoDelete(null);
  };

  return (
    <>
      <nav style={{flexDirection: "row", flexGrow: 1, paddingLeft: "10px"}}>
            <form className="form-group">
                <div className="d-flex justify-content-between">
                    <div>
                        <input className="form-control me-2 float-start" type="search" placeholder="Search for Assignment" aria-label="Search" />
                    </div>
                    <div className="ms-2">
                        <button className="btn btn-light btn-outline-secondary h-100 me-2" type="submit">+ Group </button>
                        <Link to={`/Kanbas/Courses/${courseId}/Assignments/AddAssignment`}>
                <button
                  className="btn btn-danger btn-outline-secondary h-100 me-2 wd-select-button"
                  type="button"
                >
                  + Assignment
                </button>
              </Link>
{/*                         <button className="btn btn-danger btn-outline-secondary h-100 me-2 wd-select-button" type="submit">+ Assignment</button>
 */}                        <button className="btn btn-light btn-outline-secondary h-100 me-2" type="submit"><FaEllipsisVertical/></button>
                    </div>
                </div>
            </form> 
            <hr style={{marginTop: "10px", marginBottom: "10px"}} />      
        </nav>
  <ul className="list-group">
      <li className="list-group-item list-group-item-heading d-flex justify-content-between align-items-center wd-heading">
        <div>
          <FaGripVertical className="me-2" />
          <FaCaretDown className="me-1"/>
                    <b>Assignments</b>
          </div>
          
          <div>
                    <button className="total-button">40% of total</button>
                    <FaPlus className="me-2"/>
                    <FaEllipsisVertical/>
                </div>

      </li>
      {courseAssignments.map((assignment: any) => (
  <div key={assignment._id} className="list-group-item d-flex justify-content-between">
    <div className="d-flex justify-content-between">
      <FaGripVertical className="me-3 mt-3 fs-5"/>
      <FaRegEdit className="me-3 mt-3 fs-5 wd-publish-checkCircle" />
      <div>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} className="title-link">
        <div className="fs-5">{assignment.title}</div>
      </Link>
      <div className="fw-light">{assignment.desc}</div>
      <div className="fw-light">Due Date: {assignment.dueDate}</div>
      <div className="fw-light">Points: {assignment.points}</div>
      </div>
    </div>
    <div>
      <button
        onClick={() => handleDelete(assignment._id)}
        className="btn btn-danger float-end"
        style={{ fontSize: "12px" }}
      >
        Delete
      </button>
      {showConfirmation && assignmentIdToDelete === assignment._id && (
  <div className="modal" tabIndex={-1} role="dialog" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Confirmation</h5>
          <button type="button" className="close" onClick={cancelDelete}>
          <FaTimes />
          </button>
        </div>
        <div className="modal-body">
          <p>Are you sure you want to proceed with deleting the assignment?</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-danger" onClick={confirmationDialog}>Yes</button>
          <button type="button" className="btn btn-secondary" onClick={cancelDelete}>No</button>
        </div>
      </div>
    </div>
  </div>
)}

      <FaRegCircleCheck className="me-2 mt-3 text-success" />
      <FaEllipsisV className="mt-3" />
    </div>
  </div>
))}

  </ul>

    </>
  );
}
export default Assignments;
