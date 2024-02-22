/* import Nav from "../Nav";
function Kanbas() {
 return (
   <div>
     <Nav/>
     <h1>Kanbas</h1>
   </div>
 )
}
export default Kanbas */

import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function Kanbas() {
  return (
    <div className="d-flex">
      <KanbasNavigation />
      {/* <div style={{ flexGrow: 1 }}>
        <h1>Account</h1>
        <h1>Dashboard</h1>
        <h1>Courses</h1>
      </div> */}
      <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses/>} />
        </Routes>

    </div>
  );
}
export default Kanbas;