import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGaugeHigh,
  faChartColumn,
  faUserPlus,
  faBookOpen,
  faUsers,
  faClock,
  faCalendarDays,
  faWallet,
  faFileLines,
  faBullhorn,
  faGear,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import "./Sidebar.css";


const menusections = [

  {
    title: "OVERVIEW",

    items: [
      { name: "Dashboard", icon: faGaugeHigh },

      { name: "Performance", icon: faChartColumn },

      { name: "Recruitment", icon: faUserPlus },

      { name: "Training & Development", icon: faBookOpen },

    ],
  },

  {

    title: "PEOPLE",
    items: [
      { name: "Employees", icon: faUsers },
      { name: "Attendance", icon: faClock },
      { name: "Leave Management", icon: faCalendarDays },
      { name: "Payroll", icon: faWallet },
    ],
  },

  {

    title: "RESOURCES",
    items: [
      { name: "Documents", icon: faFileLines },
      { name: "Announcements", icon: faBullhorn },
      { name: "Reports & Analytics", icon: faChartColumn },
    ],
  },

  {

    title: "SYSTEM",
    items: [
      { name: "Settings", icon: faGear },
    ],

  },
];

function Sidebar() {
  const [activeItem, setActiveItem] = useState("Employees");

  return (
    <aside className="sidebar">
      <div className="sidebar-sections">
        {menusections.map((section) => (
          <div className="sidebar-section" key={section.title}>
            <p className="sidebar-heading">{section.title}</p>

            <nav className="sidebar-menu">
              {section.items.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  className={`sidebar-link ${
                    activeItem === item.name ? "active" : ""
                  }`}
                  onClick={() => setActiveItem(item.name)}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="sidebar-icon"
                  />
                  <span>{item.name}</span>
                </button>
              ))}
            </nav>
          </div>
        ))}
      </div>

      <div className="sidebar-footer">
        <div className="sidebar-profile">
          <div className="sidebar-avatar">
            <FontAwesomeIcon icon={faUser} />
          </div>

          <div className="sidebar-user">
            <strong>Craig Calzoni</strong>
            <span>craigcalzoni454@yahoo.com</span>
          </div>

          <FontAwesomeIcon
            icon={faRightFromBracket}
            className="profile-arrow"
          />
        </div>

        <button type="button" className="logout-button">
          Log out
          <FontAwesomeIcon icon={faRightFromBracket} />
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;