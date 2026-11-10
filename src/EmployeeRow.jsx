
import "./EmployeeRow.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function EmployeeRow({ employee }) {
  const statusClasses = {
    Active: "status-active",
    "On Leave": "status-leave",
    Inactive: "status-inactive",
    "Leave Ask": "status-ask"
  };

  const statusClass = statusClasses[employee.status] || "";

  return (
    <tr className="employee-row">

      <td>
        <div className="employee-info">
          <div className="employee-avatar">
          <img src={employee.avatar} alt={employee.name} />

          </div>

          <div>
            <strong>{employee.name}</strong>
            <small>#{employee.employeeId}</small>
          </div>
        </div>
      </td>

      <td>
        <div className="employee-details">
          <strong>{employee.position}</strong>
          <small>{employee.department}</small>
        </div>
      </td>

      <td>
        <div className="employee-details">
          <strong>{employee.dateJoined}</strong>
          <small>
            <FontAwesomeIcon icon={faLocationDot} />
            {employee.location}
          </small>
        </div>
      </td>

      <td>
        <span className={`employee-status ${statusClass}`}>
          {employee.status}
        </span>

        <div className="employee-location">
          <FontAwesomeIcon icon={faLocationDot} />
          {employee.workLocation}
        </div>
      </td>

      <td>
        <button className="employee-action" type="button">
          ⋮
        </button>
      </td>

    </tr>
  );
}

export default EmployeeRow;
