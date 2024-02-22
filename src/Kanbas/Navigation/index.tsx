import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaHistory } from "react-icons/fa";
import { SlScreenDesktop } from "react-icons/sl";
import { LuScreenShare } from "react-icons/lu";
import { IoInformationCircleOutline } from "react-icons/io5";

function KanbasNavigation() {
  const links = [
    {label: "N"},
    { label: "Account",   icon: <FaRegUserCircle className="fs-2 red-icon" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2 red-icon" />  },
    { label: "Courses",   icon: <FaBook className="fs-2 red-icon" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2 red-icon" /> },
    { label: "Inbox",     icon: <FaInbox className="fs-2 red-icon" />},
    { label: "History",   icon: <FaHistory className="fs-2 red-icon" />},
    { label: "Studio",  icon: <SlScreenDesktop className="fs-2 red-icon" />},
    { label: "Commons",  icon: <LuScreenShare className="fs-2 red-icon" />},
    { label: "Help",  icon: <IoInformationCircleOutline className="fs-2 red-icon" />}
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation d-none d-md-block">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          {link.label === "N" ? (
            <div style={{ fontSize: "60px", fontWeight: "bold", color: "White" }}>
              {link.icon} {link.label}
            </div>
          ) : (
            <Link to={`/Kanbas/${link.label}`}>
              {link.icon} {link.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;