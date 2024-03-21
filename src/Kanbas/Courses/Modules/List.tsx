import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";
import { FaCaretDown, FaEllipsisVertical, FaGripVertical, FaPlus} from "react-icons/fa6";
import {BsFillCheckCircleFill} from "react-icons/bs";

import "./index.css";
import { FaTimes } from "react-icons/fa";

function ModuleList() {
    const { courseId } = useParams();
    const moduleList = useSelector((state: KanbasState) => state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) => state.modulesReducer.module);
    const dispatch = useDispatch();
    const [showInputFields, setShowInputFields] = useState(false);

    const toggleInputFields = () => {
        setShowInputFields(!showInputFields);
    };

    const handleEditClick = (module: any) => {
      dispatch(setModule(module));
      setShowInputFields(true);
    }
    

    return (
        <div className="flex-grow-1" style={{paddingTop:"40px"}}>
            <nav style={{ padding:"10px"}}>
                <form className="form-group">
                    <div style={{ justifyContent: 'flex-end' }}>
                        <button className="btn btn-light btn-outline-secondary ms-1 me-1" type="submit">Collapse All</button>
                        <button className="btn btn-light btn-outline-secondary ms-1 me-1" type="submit">View Progress</button>
                        <button className="btn btn-light btn-outline-secondary ms-1 me-1" type="submit">
                            <BsFillCheckCircleFill className = "wd-publish-checkCircle"/> Publish All <FaCaretDown/>
                        </button>
                        <button className="btn btn-danger ms-1 me-1" type="button" onClick={toggleInputFields}>+ Module</button>
                        <button className="btn btn-light btn-outline-secondary ms-1 me-1" type="submit"><FaEllipsisVertical/></button>  
                    </div>
                </form> 
                <hr style ={{ marginTop: "10px"}}/>      
            </nav>
            <ul className="list-group" style={{paddingTop:"10px"}}>
                {showInputFields && (
                    <div className="modal" tabIndex={-1} role="dialog" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Add New Course</h5>
                          <button type="button" className="close" onClick={() => setShowInputFields(false)}>
                          <FaTimes />
                          </button>
                        </div>
                        <div className="modal-body">
  <input
    value={module.name}
    onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
    style={{ width: '100%', height: '100%' }}
  />
  <br/><br/>
  <textarea
    value={module.description}
    onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
    style={{ width: '100%', height: '100px' }}
  />
</div>
                        <div className="modal-footer">
                        <button className="btn btn-danger mt-3 me-3" onClick={() => {dispatch(addModule({ ...module, course: courseId }));setShowInputFields(false);}}>
                            Add
                        </button>
                        <button className="btn btn-danger mt-3 me-3" onClick={() => {dispatch(updateModule(module));setShowInputFields(false);}}>
                            Update
                        </button>
                      <button className="btn btn-danger mt-3 me-3" onClick={() => setShowInputFields(false)}>Cancel</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {moduleList
                    .filter((module: { course: string | undefined; }) => module.course === courseId)
                    .map((module: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; _id: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
                    <li key={index} className="d-flex list-group-item list-group-item-heading align-items-center justify-content-between me-4 wd-border-left">
                        <div className="d-flex">
                            <FaGripVertical className="me-3"/> 
                            <FaCaretDown className="me-3"/>                        
                        </div>
                        <div className="col-7">
                            <h4>{module.name}</h4>
                            <p>{module.description}</p>
                        </div>
                        <div className="d-flex">
                            <BsFillCheckCircleFill className = "wd-publish-checkCircle"/>
                            <FaCaretDown className="me-3"/>  
                            <FaPlus className="me-3"/>
                            <FaEllipsisVertical />
                        </div>
                        <button className="btn btn-danger" onClick={() => handleEditClick(module)}> Edit </button>
                        <button className="btn btn-danger ms-2" onClick={() => dispatch(deleteModule(module._id))}> Delete </button>
                    </li>
                    ))
                }
            </ul>    
        </div>    
    );
}

export default ModuleList;
