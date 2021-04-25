import React from "react";
import "./style.css";
import moment from "moment";


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
          {moment(props.dob).format('MMMM Do')}
      </td>
    </tr>      
  );
};

export default EmployeeCard;
