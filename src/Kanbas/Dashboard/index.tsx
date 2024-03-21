import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as db from "../Database";
import { FaTimes } from "react-icons/fa";

function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }: {
  courses: any[]; course: any; setCourse: (course: any) => void;
  addNewCourse: () => void; deleteCourse: (course: any) => void;
  updateCourse: () => void; }) 
{
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const handleEdit = (course: React.SetStateAction<{ _id: string; name: string; number: string; startDate: string; endDate: string; image: string; }>) => {
    setCourse(course);
    setShowEditPopup(true);
  };
  return (
    <div className="p-4">
      <div className="d-flex justify-content-between align-items-center">
        <h1>Dashboard</h1>
        <button className="btn btn-danger" onClick={() => setShowAddPopup(true)}>Add New Course</button>
      </div>
      <hr />  
      <h2>Published Courses (12)</h2>
      <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={`/images/pdp.jpg`} className="card-img-top" style={{ height: 150 }} />
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`} style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name}
                  </Link>
                  <p className="card-text">{course.number}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-success">Go</Link>
                    <button className="btn btn-primary" onClick={() => handleEdit(course)}>Edit</button>
                    <button className="btn btn-danger" onClick={() => deleteCourse(course._id)}>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showAddPopup && (
        <div className="modal" tabIndex={-1} role="dialog" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Course</h5>
                <button type="button" className="close" onClick={() => setShowAddPopup(false)}>
                <FaTimes />
                </button>
              </div>
              <div className="modal-body">
              Course Name:<input value={course.name} className="form-control" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
               Course Number: <input value={course.number} className="form-control" onChange={(e) => setCourse({ ...course, number: e.target.value })} />
                Start Date: <input value={course.startDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
                End Date:<input value={course.endDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, endDate: e.target.value  })} />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={()=>{addNewCourse();setShowAddPopup(false)}}>Add Course</button>
                <button type="button" className="btn btn-secondary" onClick={() => setShowAddPopup(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showEditPopup && (
        <div className="modal" tabIndex={-1} role="dialog" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Course</h5>
                <button type="button" className="close" onClick={() => setShowEditPopup(false)}>
                <FaTimes />
                </button>
              </div>
              <div className="modal-body">
              New Course Name:<input value={course.name} className="form-control" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
              New Course Number:  <input value={course.number} className="form-control" onChange={(e) => setCourse({ ...course, number: e.target.value })} />
               New Start Date: <input value={course.startDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
                New End Date:<input value={course.endDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={()=>{updateCourse();setShowEditPopup(false)}}>Update Course</button>
                <button type="button" className="btn btn-secondary" onClick={() => setShowEditPopup(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
