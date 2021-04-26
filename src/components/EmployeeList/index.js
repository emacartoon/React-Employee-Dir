import React from "react";
import moment from "moment";

// import EmployeeCard from "../EmployeeCard";

function EmployeeList({ employees }) {
  return (
    <>
      {employees.map((employee) => {
        return (
          <tr key={employee.uuid}>
            <td className="pix">
              <img
                alt={employee.name}
                src={employee.image}
                className="pixpad"
              />
            </td>
            <td className="name">{employee.name}</td>
            <td className="phone">{employee.phone}</td>
            <td className="email">{employee.email}</td>
            <td className="dob">{moment(employee.dob).format("MMMM Do")}</td>
          </tr>
        );
      })}
    </>
  );
}

export default EmployeeList;
