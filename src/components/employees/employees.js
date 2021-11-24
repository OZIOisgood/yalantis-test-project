import React, { Component } from "react";

import "./employees.sass";

import loadingGIF from "../../img/loading.gif";

export default class Employees extends Component {
  constructor() {
    super();
    this.state = JSON.parse(sessionStorage.getItem('state')) || {
      data: [],
      loading: true,
      bigLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      monthNames: [
        "December",
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
      ],
      lang: "us-US",
      requestStr: "/task0/users",
    };

    this.onChangeValue = this.onChangeValue.bind(this);
  }

  setState(state) {
    super.setState(state);
    sessionStorage.setItem('state', JSON.stringify(this.state));
  }

  async updateData(requestStr) {
    const urlBase = `https://yalantis-react-school-api.yalantis.com/api`;

    const res = await fetch(`${urlBase}${requestStr}`);
    let data = await res.json();

    data.forEach((item) => (item.active = false));

    this.setState({
      data,
      loading: false
    });
  }

  onChangeValue(e) {
    let newData = this.state.data;

    let employee = newData.find((value) => value.id === e.target.name);
    employee.active = !employee.active;

    this.setState({
      data: newData
    });
  }

  render() {
    const { data, monthNames, bigLetters, lang, requestStr } = this.state;

    // Getting data from api by request string
    if (this.state.loading) this.updateData(requestStr);

    // Show loading gif
    if (this.state.loading) {
      return (
        <div className="loading-wrapper">
          <img src={loadingGIF} className="loading" alt="Loading gif" />
        </div>
      );
    }

    // Sorting employees by first letter of firstname
    const employees = data.sort((a, b) => {
      var nameA = a.firstName.toLowerCase(),
        nameB = b.firstName.toLowerCase();

      if (nameA < nameB) return -1;

      if (nameA > nameB) return 1;

      return 0;
    });

    // Making collection of characters with filteredEmployees
    const elements = [];

    for (let character of bigLetters) {
      var filteredEmployees = employees.filter(
        (employee) => character === employee.firstName[0]
      );

      if (filteredEmployees.length === 0) filteredEmployees = "No Employees";

      elements.push({
        character,
        filteredEmployees,
      });
    }

    // Making html of elements
    const employeesList = elements.map((item) => {
      const { character, filteredEmployees } = item;

      const filteredEmployeesList = [];

      if (filteredEmployees === "No Employees")
        filteredEmployeesList.push(
          <>
            <h4 className="attention-color">No Employees</h4>
          </>
        );
      else
        for (let filteredEmployee of filteredEmployees) {
          const { firstName, lastName, id, active } = filteredEmployee;

          const employee = <>{`${firstName} ${lastName}`}</>;

          const wrappedEmployee = active ? (
            <div style={{ color: "#0075FF" }}> {employee} </div>
          ) : (
            <> {employee} </>
          );

          filteredEmployeesList.push(
            <div className="allEmployeesList-letterCard-employeesList-item">
              {wrappedEmployee}
              <form>
                <input
                  type="radio"
                  value="not active"
                  name={id}
                  checked={!active}
                  onChange={this.onChangeValue}
                />{" "}
                not active <br />
                <input
                  type="radio"
                  value="active"
                  name={id}
                  checked={active}
                  onChange={this.onChangeValue}
                />{" "}
                active <br />
                <br />
              </form>
            </div>
          );
        }

      return (
        <div className="allEmployeesList-letterCard">
          <h3>{character}</h3>
          <div className="allEmployeesList-letterCard-employeesList">
            {filteredEmployeesList}
          </div>
        </div>
      );
    });

    // Sorting active employees by lastname and filtering by month of birth
    const activeEmployees = data
      .sort((a, b) => {
        var lastnameA = a.lastName.toLowerCase(),
          lastnameB = b.lastName.toLowerCase();

        if (lastnameA < lastnameB) return -1;

        if (lastnameA > lastnameB) return 1;

        return 0;
      })
      .filter((employee) => employee.active === true);

    // Making collection of monthes with filteredActiveEmployees
    const monthElements = [];

    const thisMonth = new Date(Date.now()).toLocaleDateString(lang, {
      month: "long",
    });

    // Sort moths from current month
    while (monthNames[0] !== thisMonth) monthNames.push(monthNames.shift());

    for (let month of monthNames) {
      var filteredActiveEmployees = activeEmployees.filter((employee) => {
        return (
          month ===
          new Date(Date.parse(employee.dob)).toLocaleDateString("us-US", {
            month: "long",
          })
        );
      });

      if (filteredActiveEmployees.length === 0)
        filteredActiveEmployees = "No Employees";

      monthElements.push({
        month,
        filteredActiveEmployees,
      });
    }

    // Making html of elements
    let activeEmployeesList = [];

    if (
      monthElements.filter(
        (element) => element.filteredActiveEmployees === "No Employees"
      ).length === monthElements.length
    )
      activeEmployeesList = (
        <>
          <h4 className="attention-color">Employees List is empty</h4>
        </>
      );
    else
      activeEmployeesList = monthElements.map((item) => {
        const { month, filteredActiveEmployees } = item;

        const filteredEmployeesList = [];

        if (filteredActiveEmployees === "No Employees")
          filteredEmployeesList.push(
            <>
              <h4 className="attention-color">No Employees</h4>
            </>
          );
        else
          for (let filteredEmployee of filteredActiveEmployees) {
            const { firstName, lastName, dob } = filteredEmployee;
            const date = new Date(Date.parse(dob));

            const year = date.toLocaleDateString(lang, { year: "numeric" });
            const month = date.toLocaleDateString(lang, { month: "long" });
            const day = date.toLocaleDateString(lang, { day: "2-digit" });

            filteredEmployeesList.push(
              <li className="activeEmployeesList-monthCard-employeesList-item">
                {`${firstName} ${lastName} - ${day} ${month}, ${year} year`}
              </li>
            );
          }

        return (
          <div className="activeEmployeesList-monthCard">
            <h3>{month}</h3>
            <div className="activeEmployeesList-monthCard-employeesList">
              <ul>{filteredEmployeesList}</ul>
            </div>
          </div>
        );
      });

    return (
      <div className="employeesBlock">
        <h1>Employees page</h1>

        <hr />

        <div className="allEmployeesList">
          <h2>Employees</h2>
          <div className="letterCards-wrapper">
            {employeesList}
          </div>
        </div>

        <div className="activeEmployeesList">
          <h2>Employees birthday</h2>
          <div className="monthCard-wrapper">
            {activeEmployeesList}
          </div>
        </div>
      </div>
    );
  }
}
