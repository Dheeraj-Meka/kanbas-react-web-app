import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaCaretDown,} from "react-icons/fa";
import { useParams } from "react-router";
import {BsFillCheckCircleFill, BsCheckCircle} from "react-icons/bs";

function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <div className="flex-grow-1 container-fluid" style={{paddingTop:"10px"}}>
    <nav style={{ padding:"10px"}}>
            <form className="wd-top-button-form-group float-end">
                <div className="justify-content-center">
                    <button className="btn btn-light btn-outline-secondary ms-1 me-1" type="submit">Collapse All</button>
                    <button className="btn btn-light btn-outline-secondary ms-1 me-1" type="submit">View Progress</button>
                    <button className="btn btn-light btn-outline-secondary ms-1 me-1" type="submit">
                        <BsCheckCircle  className = "wd-publish-checkCircle"/> Publish All <FaCaretDown/>
                    </button>
                    <button className="btn btn-danger wd-select-button ms-1 me-1" type="submit">+ Module</button>
                    <button className="btn btn-light btn-outline-secondary ms-1 me-1" type="submit"><FaEllipsisV/></button>  
                </div>
            </form> 
            <hr style ={{ marginTop: "50px"}}/>      
        </nav>
      {/* <!-- Add buttons here --> */}
      <ul className="list-group wd-modules">
        {modulesList.map((module, index) => (
          <li key={index}
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson, index) => (
                  <li className="list-group-item" key={index}>
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ModuleList; 