import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FaEllipsisV, FaCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, selectAssignment, updateAssignment } from "../assignmentsReducer";
import { FaEllipsisVertical } from "react-icons/fa6";

function AddNewAssignment() {
  const { courseId } = useParams();
  const assignment = useSelector((state: any) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();

  return (
    <div>
      {/* <div className="row">
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
        </div> */}
      <form>
      Assignment Name:
      <input defaultValue={assignment.title} 
      onChange={(e) => dispatch(selectAssignment({ ...assignment, title: e.target.value }))} 
      className="form-control mb-2" type="text" name="title" width={50}/>

      Assignment Description:
      <textarea defaultValue={assignment.desc} 
      onChange={(e) => dispatch(selectAssignment({ ...assignment, desc: e.target.value }))}
      className="form-control" cols={25} rows={10} name="desc"/>

      Points:
    <input defaultValue={assignment.points} 
    onChange={(e) => dispatch(selectAssignment({ ...assignment, points: e.target.value }))} 
    className="form-control" type="number" name="points" min={0} max={100}/>
      <br/>
      <div className="row">
                &nbsp;&nbsp;&nbsp;Assign: &nbsp;    
                <div className="col-7 border rounded-2">
                    <div className="mb-3 mt-3">
                        <label htmlFor="due" className="form-label mb-0"><b>Due</b></label>
                        <input type="date" defaultValue={assignment.dueDate} 
                        onChange={(e) => dispatch(selectAssignment({ ...assignment, dueDate: e.target.value }))} 
                        className="form-control" name="dueDate"/>
                    </div>
                    <div className="row mt-3">
                        <div className="col mb-3">
                            <label htmlFor="availableFrom" className="form-label mb-0"><b>Available From</b></label>
                            <input type="date" defaultValue={assignment.availableFromDate} 
                            onChange={(e) => dispatch(selectAssignment({ ...assignment, availableFromDate: e.target.value }))}  
                            className="form-control" name="availableFromDate" value="2024-02-08"/>
                        </div>
                        <div className="col mb-3">
                            <label htmlFor="until" className="form-label mb-0"><b>Availabe Until</b></label>
                            <input type="date" defaultValue={assignment.availableUntilDate} 
                            onChange={(e) => dispatch(selectAssignment({ ...assignment, availableUntilDate: e.target.value }))}  
                            className="form-control" name="availableUntilDate" value="2024-02-08"/>
                        </div>
                    </div>
                    </div>
                    </div>
      <hr />
        <div className="row mt-2">
          <div className="col-12">
            <Link
              onClick={() => dispatch(addAssignment({...assignment, course: courseId}))}
              to={`/Kanbas/Courses/${courseId}/Assignments`}
              className="btn m-2 fs-5 btn-danger float-end"
            >
              Save
            </Link>
            <Link
              to={`/Kanbas/Courses/${courseId}/Assignments`}
              className="btn btn-secondary m-2 fs-5 bg-light text-dark float-end"
            >
              Cancel
            </Link>
          </div>
        </div>
      </form>
      <hr />
    </div>
  );
}

export default AddNewAssignment;
