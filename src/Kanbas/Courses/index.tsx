import { courses } from "../../Kanbas/Database";
import { Link, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import { FaChevronDown } from "react-icons/fa6";
import { FaBars, FaBook, FaBullhorn, FaCalendar, FaClock, FaCog, FaComments, FaDatabase, FaEnvelope, FaExternalLinkAlt, FaFile, FaGraduationCap, FaGrav, FaHome, FaInfo, FaListAlt, FaOpera, FaPlug, FaRocket, FaTachometerAlt, FaTv, FaUser, FaUsers } from "react-icons/fa";
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';

function Courses() {
  const { courseId } = useParams();
  const location = useLocation();
  const course = courses.find((course) => course._id === courseId);
  const getCurrentPath = () => {
    const pathParts = location.pathname.split('/').filter(Boolean);

    if (pathParts.includes('Assignments') && pathParts.length > 4) {
      const assignmentId = pathParts[4];
      return `Assignments > ${assignmentId}`;
    } else {
    return pathParts.slice(3).join(' > ');
    }
  };
  return (
    <div>
        <div className="d-block d-md-none">
      <div className="navbar" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: 'black',
        width: '100%',
        padding: '10px',
        zIndex: 1000,
      }}>
        <FaBars className="menu-icon" data-bs-toggle="modal" data-bs-target="#wd-kanbasnav-modal" />
        <div className="navbar-title" >{course?.name}</div>
        <FaChevronDown className="chevron-icon" data-bs-toggle="modal" data-bs-target="#wd-coursenav-modal" />
      </div>
      <div className="modal fade" id="wd-coursenav-modal" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Course Navigation</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <ul className="wd-modal-kanbasnav">
                {/* <div><Link to={'/Kanbas/Courses/Home'}><FaHome/></Link></div> */}
                <div><a href="/Kanbas/Courses/Home/screen.html"><FaHome/>&nbsp;&nbsp;Home</a></div>
                <div><a href="/Kanbas/Courses/Home/screen.html"><FaBook/>&nbsp;&nbsp;Modules</a></div>
                <div><a href="#"><FaPlug/>&nbsp;&nbsp;Piazza</a></div>
                <div><a href="#"><FaPlug/>&nbsp;&nbsp;Zoom Meetings</a></div>
                <div><a href="/Kanbas/Courses/Assignments/screen.html"><FaListAlt/>&nbsp;&nbsp;Assignments</a></div>
                <div><a href="#"><FaRocket/>&nbsp;&nbsp;Quizzes</a></div>
                <div><a href="/Kanbas/Courses/Grades/screen.html"><FaGraduationCap/>&nbsp;&nbsp;Grades</a></div>
                <div><a href="#"><FaUsers/>&nbsp;&nbsp;People</a></div>
                <div><a href="#"><FaPlug/>&nbsp;&nbsp;Panopto Video</a></div>
                <div><a href="#"><FaComments/>&nbsp;&nbsp;Discussions</a></div>
                <div><a href="#"><FaBullhorn/>&nbsp;&nbsp;Announcements</a></div>
                <div><a href="#"><FaFile/>&nbsp;&nbsp;Pages</a></div>
                <div><a href="#"><FaFile/>&nbsp;&nbsp;Files</a></div>
                <div><a href="#"><FaDatabase/>&nbsp;&nbsp;Rubrics</a></div>
                <div><a href="#"><FaGrav/>&nbsp;&nbsp;Outcomes</a></div>
                <div><a href="#"><FaOpera/>&nbsp;&nbsp;Collaborations</a></div>
                <div><a href="#"><FaOpera/>&nbsp;&nbsp;Syllabus</a></div>
                <div><a href="/Kanbas/Courses/Settings/Course Details/screen.html"><FaCog/>&nbsp;&nbsp;Settings</a></div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="wd-kanbasnav-modal" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Course Navigation</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            
            
            <div className="modal-body">
                <ul className="wd-modal-kanbasnav">
                    <div><a href="/Kanbas/Account/Navigation/index.html"><FaUser/>&nbsp;&nbsp;Account</a></div>
                    <div><a href="/Kanbas/Dashboard/screen.html"><FaTachometerAlt/>&nbsp;&nbsp;Dashboard</a></div>
                    <div><a href="/Kanbas/Courses/Home/screen.html">
                        <FaBook/>&nbsp;&nbsp;Courses</a></div>
                    <div><a href="#">
                      <FaCalendar/>&nbsp;&nbsp;Calendar</a></div>
                    <div><a href="#">
                      <FaEnvelope/>&nbsp;&nbsp;Inbox</a></div>
                    <div><a href="#">
                      <FaClock/>&nbsp;&nbsp;History</a></div>
                    <div><a href="#">
                      <FaTv/>&nbsp;&nbsp;Studio</a></div>
                    <div><a href="#">
                      <FaExternalLinkAlt/>&nbsp;&nbsp;Commons</a></div>
                    <div><a href="#">
                      <FaInfo/>&nbsp;&nbsp;Help</a></div>
                  </ul>
            </div>
          </div>
        </div>
        </div>
    </div>
      <div className= "d-none d-md-block" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 style={{
          color: 'red',
          fontSize: '1.5em',
          fontWeight: 'normal'
        }}>
          <HiMiniBars3 />&nbsp;Course {course?.name} {'>'} {getCurrentPath()}
        </h1>
      </div>
      
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "50px" }} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>} />
            <Route path="Grades" element={<Grades/>} />
            <Route path="People" element={<h1>People</h1>} />
            <Route path="Settings" element={<h1>Settings</h1>} />
            <Route path="Zoom Meetings" element={<h1>Zoom Meetings</h1>} />
            <Route path="Quizzes" element={<h1>Quizzes</h1>} />
            <Route path="Discussions" element={<h1>Discussions</h1>} />
            <Route path="Announcements" element={<h1>Announcements</h1>} />
            <Route path="Panopto Video" element={<h1>Panopto Video</h1>} />
            <Route path="Pages" element={<h1>Pages</h1>} />
            <Route path="Files" element={<h1>Files</h1>} />
            <Route path="Rubrics" element={<h1>Rubrics</h1>} />
            <Route path="Outcomes" element={<h1>Outcomes</h1>} />
            <Route path="Collaborations" element={<h1>Collaborations</h1>} />
            <Route path="Syllabus" element={<h1>Syllabus</h1>} />
          </Routes>
        </div>
      </div>
      </div>
  );
}
export default Courses;