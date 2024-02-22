import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import "./index.css";
import { FaCheckCircle } from "react-icons/fa";
import { FaEllipsis, FaEllipsisVertical } from "react-icons/fa6";
function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
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
      <h2>Assignment Name</h2>
      <input value={assignment?.title}
             className="form-control mb-2" />
        <div className="mb-3">            
            <textarea className="form-control" id="wd-description" rows={4}>This assignment describes how to install the development environment htmlFor creating and working with Web applications we will be developing this semester. We will add new content every week, pushing the code to a GitHub source repository, and then deploying the content to a remote server hosted on Netlify.
            </textarea>
            </div>
            <div className="mb-3 row form-group">
                <div className="col">
                    <label className="form-label" htmlFor="points">Points</label>
                </div>
                <div className="col-7">
                    <input className="form-control" type="number" value="100" id="wd-points"/>
                </div>
                <div className="col-2"></div>
            </div>
                
            <div className="mb-3 row">
                <div className="col">
                    <label className="form-label" htmlFor="wd-assign-group">Assignment Group</label>
                </div>
                <div className="col-7">
                    <select className="form-select" id="wd-assign-group">
                        <option selected>ASSIGNMENTS</option>
                        <option>Choice - 2</option>
                        <option>Choice - 3</option>
                    </select>
                </div>
                <div className="col-2"></div>                                                                        
            </div>
            
            <div className="mb-3 row ">
                <div className="col">
                    <label className="form-label" htmlFor="wd-grade-display">Display Grade as</label>
                </div>
                <div className="col-7">
                    <select className="form-select" id="wd-grade-display">
                        <option selected>PERCENTAGE</option>
                        <option>Marks</option>
                        <option>Alphabets</option>
                    </select>
                </div>
                <div className="col-2"></div>
            </div>

            <div className="mb-3 row">
                <div className="col-3"></div>
                <div className="col form-check">
                    <input className="form-check-input" type="checkbox" value="" id="wd-do-not-count"/>
                    <label className="form-check-label" htmlFor="wd-do-not-count">
                      Do not count this assignment towards the final grade
                    </label>
                </div>
            </div>

            <div className="mb-3 row">
                <div className="col">
                    <label className="form-label" htmlFor="assignGroup">Display Grade as</label>
                </div>
                <div className="col-7">
                    <input className="form-control" type="number" value="100" id="assignGroup"/>
                </div>
                <div className="col-2"></div>
            </div>
            <div className="mb-3 row">
                <div className="col">
                    <label className="form-label" htmlFor="subattempts">Assign</label>
                </div>                            
                <div className="col-7 border rounded-2">
                    <div className="mb-3 mt-3">
                        <label htmlFor="assignTo" className="form-label mb-0"><b>Assign To</b></label>
                        <input type="text" className="form-control" id="assignTo" value="Everyone"/>
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="due" className="form-label mb-0"><b>Due</b></label>
                        <input type="date" className="form-control" id="due" value="2024-02-08"/>
                    </div>
                    <div className="row mt-3">
                        <div className="col mb-3">
                            <label htmlFor="availableFrom" className="form-label mb-0"><b>Available from</b></label>
                            <input type="date" className="form-control" id="availableFrom" value="2024-02-08"/>
                        </div>
                        <div className="col mb-3">
                            <label htmlFor="until" className="form-label mb-0"><b>Until</b></label>
                            <input type="date" className="form-control" id="until" value="2024-02-08"/>
                        </div>
                    </div>
                    <div className="row mt-0 border border-top rounded-2">
                        <button type="button" className="btn btn-light">+Add</button>
                    </div>                                    
                </div>
                <div className="col-2"></div>
            </div>
            <hr/>
            <div className="d-flex justify-content-between">                            
                <div className="form-check mt-2">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      Notify users that this content has changed
                    </label>
                </div>
                </div>
      <button onClick={handleSave} className="btn btn-success me-2 float-end">
        Save
      </button>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-danger me-2 float-end">
        Cancel
      </Link>
      
      </div>
  );
}
export default AssignmentEditor;