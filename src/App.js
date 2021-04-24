import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";

import EmployeeCard from "./components/EmployeeCard";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

import API from "./utils/API";

class App extends React.Component {
  state = {
    employees: [],
    search: "",
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = async () => {
    const { data } = await API.getEmployees();
    const employees = data.results.map((item) => ({
      name: `${item.name.first} ${item.name.last}`,
      email: item.email,
      phone: item.cell,
      dob: item.dob.date,
      image: item.picture.thumbnail,
    }));
    this.setState({ employees });
  };

  filterEmployees = (employee) => {
    for (const key in employee) {
      if (key === "image") continue;
      if (employee[key].includes(this.state.search)) {
        return true;
      }
    }
    return false;
  };

  // filterEmployees = (employee) => {
  //   if (employee.name.includes(this.state.search)) return true;
  //   if (employee.phone.includes(this.state.search)) return true;
  //   if (employee.email.includes(this.state.search)) return true;
  //   if (employee.dob.includes(this.state.search)) return true;
  // return false;
  // }

  render() {
    const { employees } = this.state;
    return (
      <Wrapper>
        <Title />
        <table class="table">
          <tbody>
            <tr className="headRow">
              <td className="pix headRow"></td>
              <td className="name headRow">Name</td>
              <td className="phone headRow">Phone</td>
              <td className="email headRow">E-mail</td>
              <td className="dob headRow">Birthday</td>
            </tr>
            {employees.map((employee) => (
              <EmployeeCard key={employee.id} {...employee} />
            ))}
          </tbody>
        </table>

        <Footer />
      </Wrapper>
    );
  }
}

export default App;
