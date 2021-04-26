import React from "react";
// import EmployeeCard from "./components/EmployeeCard";
import EmployeeList from "./components/EmployeeList";
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
    const query = event.target.value;
    const saved = this.state.employees;
    console.log('saved length', saved.length);
    const found = saved.filter((employee) => {
      console.log(employee.name);
      return employee.name.toLowerCase().includes(query.toLowerCase());
    });
    console.log('found length', found.length);
    this.setState({
      search: query,
      sortedEmployees: [...found],
    });
    console.log("sort", this.state.sortedEmployees);

  };

  filteredEmployees = (employee) => {
    if (employee.name.first.includes(this.state.search)) return true;
    if (employee.name.last.includes(this.state.search)) return true;
    if (employee.phone.includes(this.state.search)) return true;
    if (employee.email.includes(this.state.search)) return true;
    if (employee.dob.date.includes(this.state.search)) return true;

    return false;
  };

  render() {
    return (
      <Wrapper>
        <Title />
        <nav>
          <div>
            <SearchForm
              handleOnInputChange={this.handleOnInputChange}
              searchTerm={this.state.search}
            />
          </div>
        </nav>
        <table className="table">
          <thead>
            <tr className="headRow">
              <td className="pix headRow"></td>
              <td className="name headRow">Name</td>
              <td className="phone headRow">Phone</td>
              <td className="email headRow">E-mail</td>
              <td className="dob headRow">Birthday</td>
            </tr>
          </thead>
          <tbody>
            <EmployeeList employees={this.state.sortedEmployees} />
          </tbody>
        </table>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
