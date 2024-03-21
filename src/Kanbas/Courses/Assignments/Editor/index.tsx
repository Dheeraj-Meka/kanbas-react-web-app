import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FaEllipsisV, FaCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { selectAssignment, updateAssignment } from "../assignmentsReducer";
import { FaEllipsisVertical } from "react-icons/fa6";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
  const assignment = assignments.find((assignment: any) => assignment._id === assignmentId);
  const dispatch = useDispatch();

  const [assignmentData, setAssignmentData] = useState({
    ...assignment,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setAssignmentData({ ...assignmentData, [name]: value });
  };

  return (
    <div>
      <div className="row">
            <nav style={{flexDirection:"row", flexGrow:1, paddingLeft:10}}>
                <form className="form-group">
                    <div className="d-flex justify-content-end">     
                        <div>                                            
                            <FaCheckCircle/>&nbsp;Published&nbsp;&nbsp;                                          
                            <button className="btn btn-light btn-outline-secondary" type="submit"><FaEllipsisVertical/></button>
                        </div>
                    </div>
                </form> 
                <hr/>      
            </nav>
        </div>
      <form>
      Assignment Name:
      <input defaultValue={assignmentData.title} onChange={handleChange} className="form-control mb-2" type="text" name="title" width={50}/>
      Assignment Description:
      <textarea defaultValue={assignmentData.desc} onChange={handleChange} className="form-control" cols={25} rows={10} name="desc"/>
      Points:
      <input defaultValue={assignmentData.points} onChange={handleChange} className="form-control" type="number" name="points" min={0} max={100}/>
      <br/>
      <div className="row">
                &nbsp;&nbsp;&nbsp;Assign: &nbsp;    
                <div className="col-7 border rounded-2">
                    <div className="mb-3 mt-3">
                        <label htmlFor="due" className="form-label mb-0"><b>Due</b></label>
                        <input type="date" defaultValue={assignmentData.dueDate} onChange={handleChange} className="form-control" name="dueDate"/>
                    </div>
                    <div className="row mt-3">
                        <div className="col mb-3">
                            <label htmlFor="availableFrom" className="form-label mb-0"><b>Available From</b></label>
                            <input type="date" defaultValue={assignmentData.availableFromDate} onChange={handleChange} className="form-control" name="availableFromDate" value="2024-02-08"/>
                        </div>
                        <div className="col mb-3">
                            <label htmlFor="until" className="form-label mb-0"><b>Availabe Until</b></label>
                            <input type="date" defaultValue={assignmentData.availableUntilDate} onChange={handleChange} className="form-control" name="availableUntilDate" value="2024-02-08"/>
                        </div>
                    </div>
                    </div>
                    </div>
      <hr />
        <div className="row mt-2">
          <div className="col-12">
            <Link
              onClick={() => dispatch(updateAssignment({ assignmentData }))}
              to={`/Kanbas/Courses/${assignment.course}/Assignments`}
              className="btn btn-success me-2 float-end"
            >
              Save
            </Link>
            <Link
              to={`/Kanbas/Courses/${assignment.course}/Assignments`}
              className="btn btn-danger me-2 float-end"
            >
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AssignmentEditor;
