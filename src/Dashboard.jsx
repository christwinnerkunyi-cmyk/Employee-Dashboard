
import "./Dashboard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFilter,
  faMagnifyingGlass,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

import EmployeeRow from "./EmployeeRow";


const employees = [
  {
    id: 1,
    name: "Roger Calzoni",
    employeeId: "31645",
    avatar: "/download (1).jpg",
    position: "Senior Developer",
    department: "Engineering",
    dateJoined: "11 Aug, 25",
    location: "Office",
    status: "Active",
    workLocation: "Office"
  },
  {
    id: 2,
    name: "Marcus Workman",
    employeeId: "31645",
    avatar: "/download (2).jpg",
    position: "Senior Developer",
    department: "Engineering",
    dateJoined: "02 Aug, 25",
    location: "Office",
    status: "Active",
    workLocation: "San Diego, US"
  },
  {
    id: 3,
    name: "Zaire Dorwart",
    employeeId: "31645",
    avatar: "/download (3).jpg",
    position: "Senior Developer",
    department: "Engineering",
    dateJoined: "01 Jul, 25",
    location: "Office",
    status: "On Leave",
    workLocation: "Office"
  },
  {
    id: 4,
    name: "Zaire Dorwart",
    employeeId: "31645",
    avatar: "/download (4).jpg",
    position: "Senior Developer",
    department: "Engineering",
    dateJoined: "01 Jul, 25",
    location: "Office",
    status: "On Leave",
    workLocation: "Office"
  },
  {
    id: 5,
    name: "Talan Vetrovs",
    employeeId: "31645",
    avatar: "/download (5).jpg",
    position: "Senior Developer",
    department: "Engineering",
    dateJoined: "15 April, 25",
    location: "Office",
    status: "Active",
    workLocation: "Office"
  },
  {
    id: 6,
    name: "Madelyn Botosh",
    employeeId: "31645",
    avatar: "/download (6).jpg",
    position: "Senior Developer",
    department: "Engineering",
    dateJoined: "19 April, 25",
    location: "Office",
    status: "Inactive",
    workLocation: "Office"
  },
  {
    id: 7,
    name: "Alena Botosh",
    employeeId: "31645",
    avatar: "/Young black Excellence.jpg",
    position: "Senior Developer",
    department: "Engineering",
    dateJoined: "25 May, 25",
    location: "Office",
    status: "Leave Ask",
    workLocation: "New York, NY"
  },
  {
    id: 8,
    name: "Lincoln Dias",
    employeeId: "31645",
    avatar: "/Zubair Khan.jpg",
    position: "Senior Developer",
    department: "Engineering",
    dateJoined: "18 Jul, 25",
    location: "Office",
    status: "Leave Ask",
    workLocation: "Office"
  },
  {
    id: 9,
    name: "Lincoln Dias",
    employeeId: "31645",
    avatar: "/download.jpg",
    position: "Senior Developer",
    department: "Engineering",
    dateJoined: "18 Jul, 25",
    location: "Office",
    status: "Leave Ask",
    workLocation: "Office"
  }
];


function Dashboard() {

  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  return (
    <main className="dashboard-content">

      {/* DASHBOARD HEADING */}

      <div className="dashboard-heading">

        <div className="heading-text">
          <h1>Employee Directory</h1>
          <p>Manage your team members and their information</p>
        </div>

        <div className="dashboard-actions">

          <div className="employee-search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />

            <input
              type="text"
              placeholder="Search by name, role or department...."
              aria-label="Search Employees"
            />
          </div>

          <button className="filter-button" type="button">
            <FontAwesomeIcon icon={faFilter} />
            <span>Filter</span>
          </button>

          <button className="date-button" type="button">
            {currentDate}
          </button>

        </div>
      </div>


      {/* SUMMARY CARDS */}

      <div className="summary-cards">

        <article className="summary-card">

          <div className="card-top">
            <span>Total Employees</span>
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </div>

          <div className="card-number-row">
            <h2>250</h2>
            <span className="growth-badge">+15 this month</span>
          </div>

          <div className="employee-breakdown">

            <span>
              <i className="status-dot active-dot"></i>
              Active (153)
            </span>

            <span>
              <i className="status-dot inactive-dot"></i>
              Inactive (35)
            </span>

            <span>
              <i className="status-dot leave-dot"></i>
              On Leave (84)
            </span>

          </div>
        </article>


        <article className="summary-card">

          <div className="card-top">
            <span>On Leave</span>
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </div>

          <div className="card-number-row">
            <h2>12</h2>
            <span className="growth-badge">
              +15 this month
            </span>
          </div>

          <p className="card-detail">
            2 pending approvals
          </p>

        </article>


        <article className="summary-card">

          <div className="card-top">
            <span>Late Check-ins</span>
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </div>

          <div className="card-number-row">
            <h2>25</h2>
            <span className="warning-badge">
              +0.5% this month
            </span>
          </div>

          <div className="employee-breakdown">
            <span>◉ Sales (7)</span>
            <span>◈ Tech (5)</span>
          </div>

        </article>

      </div>


      {/* EMPLOYEE TABLE */}

      <section className="employee-section">

        <table className="employee-table">

          <thead>
            <tr>
              <th>Employee list</th>
              <th>Role</th>
              <th>Join Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {employees.map((employee) => (
              <EmployeeRow
                key={employee.id}
                employee={employee}
              />
            ))}

          </tbody>

        </table>

      </section>

    </main>
  );
}

export default Dashboard;
