import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <tr>
      <td className="pix">
        <img alt={props.name} src={props.image} className="pixpad"/>
      </td>
      <td className="name">
        {props.name}
      </td>
      <td className="phone">
          {props.phone}
      </td>
      <td className="email">
          {props.email}
      </td>
      <td className="dob">
          {props.dob}
      </td>
    </tr>      
  );
};

export default EmployeeCard;
