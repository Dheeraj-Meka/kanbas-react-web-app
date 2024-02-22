
import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import "./index.css";
import {FaRegCircleCheck, FaCaretDown, FaEllipsisVertical, FaGripVertical, FaPlus} from "react-icons/fa6";
import { FaChevronDown, FaFilter, FaSearch, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
        <nav style={{flexDirection:"row", flexGrow:"1"}}>
            <div className="d-flex justify-content-between mt-3 mb-3">
                <div></div>
                <div className="d-flex justify-content-end me-3">                                        
                    <div>
                        <button className="btn btn-light ms-2" type="submit">
                            <FaSignInAlt/> Import
                        </button>
                        <button className="btn btn-light ms-2" type="submit"> 
                            <FaSignOutAlt/> Export
                        </button>
                        <button className="btn btn-light ms-2" type="submit">
                            <FaEllipsisVertical/>
                        </button>
                    </div>
                </div>
            </div>
      
        </nav>
        <div className="row">
            <form className="form-group">
                <div className="row g-1">
                    <div className="col-md-6">
                        <label htmlFor="Name" className="form-label">Student Names</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><FaSearch/></span>                                            
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search Students"
                                aria-label="Student Names"
                                aria-describedby="basic-addon1"
                            />
                            <span className="input-group-text" id="basic-addon1"><FaChevronDown/></span>
                        </div>                                    
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="Name" className="form-label">Assignment Names</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><FaSearch/></span>                                            
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search Assignments"
                                aria-label="Assignment Names"
                                aria-describedby="basic-addon1"
                            />
                            <span className="input-group-text" id="basic-addon1"><FaChevronDown/></span>
                        </div>                                    
                    </div>
                </div>
                <div className="row g-1">
                    <div className="col-2 mt-3 mb-2">
                        <button className="form-control btn btn-light">
                            <FaFilter/>&nbsp;Apply Filters
                        </button>

                    </div>                                    
                </div>                                
            </form>                            
        </div>


      <div className="table-responsive">
        <table className="table table-bordered text-nowrap table-striped">
          <thead>
            <th>Student Name</th>
            {as.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>


          <tbody>
            {es.map((enrollment) => {
              const user = users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td className="wd-table-student">{user?.firstName} {user?.lastName}</td>
                   {as.map((assignment) => {
                     const grade = grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
          </tbody></table>
      </div></div>);
}
export default Grades;