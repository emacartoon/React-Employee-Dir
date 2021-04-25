import React from "react";
import EmployeeCard from "./components/EmployeeCard";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import SearchForm from "./components/SearchForm";
import Footer from "./components/Footer";
import API from "./utils/API";

class App extends React.Component {
  state = {
    employees: [],
    search: "",
    sortedEmployees: [],
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = async () => {
    const { data } = await API.getEmployees();
    console.log(data);
    const employees = data.results.map((item) => ({
      uuid: item.login.uuid,
      name: `${item.name.first} ${item.name.last}`,
      email: item.email,
      phone: item.cell,
      dob: item.dob.date,
      image: item.picture.thumbnail,
    }));
    this.setState({ employees: employees, sortedEmployees: employees });
  };

  handleOnInputChange = (event) => {
    console.log(event.target.value);
    const query = event.target.value;
    this.setState({ search: query });
  };

  sortedEmployees = (employee) => {
    if (employee.name.first.includes(this.state.query)) return true;
    if (employee.name.last.includes(this.state.query)) return true;
    if (employee.phone.includes(this.state.query)) return true;
    if (employee.email.includes(this.state.query)) return true;
    if (employee.dob.date.includes(this.state.query)) return true;

    return false
  }

  // handleOnInputChange = (event) => {
  //   const query = event.target.value;
  //   const saved = this.state.employees;
  //   const found = saved.filter((employee) => {
  //     return employee.name.toLowerCase().includes(query); //
  //   });
  //   this.setState({
  //     employees: [...saved],
  //     search: query,
  //     sortedEmployees: [...found],
  //   });
  // };

  render() {
    return (
      <Wrapper>
        <Title />
        <nav>
          <div>
            <SearchForm
              value={this.state.search}
              handleOnInputChange={this.handleOnInputChange}
            />
          </div>
        </nav>
        <table className="table">
          <tbody>
            <tr className="headRow">
              <td className="pix headRow"></td>
              <td className="name headRow">Name</td>
              <td className="phone headRow">Phone</td>
              <td className="email headRow">E-mail</td>
              <td className="dob headRow">Birthday</td>
            </tr>
            {this.state.sortedEmployees.map((employee) => (
              <EmployeeCard key={employee.uuid} {...employee} />
            ))}
          </tbody>
        </table>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
