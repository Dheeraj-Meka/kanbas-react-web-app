import { Route, Routes, useLocation } from "react-router";
import { Link } from "react-router-dom";

function VariablesAndConstants() {
   const { pathname } = useLocation();
  return (
    <div>
      output =
      {pathname.includes("s") && <span>p</span>}
      {pathname.includes("w") && <span>y</span>}
    </div>
  );
}

export default function Abc() {
  return (
    <div>
      <Link to="q/w">x</Link>
      <Link to="q/s">r</Link>
      <Routes>
        <Route path="q/:a" element={<VariablesAndConstants />} />
      </Routes>
    </div>
  );
 }
