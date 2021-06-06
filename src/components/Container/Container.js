import React, { Component } from "react";
import SearchForm from "../Search";
import Table from "../Table/Table";
import API from "../../utils/API";

class Container extends Component {
    state = {
        search: "",
        employees: [],
        filteredEmployees: []
    };

    // Loads random users from the API when the component mounts
    componentDidMount() {
        API.getEmployees()
            .then((res) =>
                this.setState({
                    employees: res.data.results,
                    filteredEmployees: res.data.results
                })
            )
            .catch((err) => console.log(err));
    }

    //Sorts the data in ascending or descending order by the employee's last name
    sortingData = (event) => {
        console.log(this.state.isAscending);
        event.preventDefault();
        this.setState({
            results: this.state.results.sort((a, b) => {
                if (this.state.isAscending === true) {
                    //arange it ascending order by FIRST NAMES only 
                    return (a.name.last < b.name.last) ? -1 : (a.name.last > b.name.last) ? 1 : 0
                } else {
                    //Descending order 
                    return (a.name.last < b.name.last) ? 1 : (a.name.last > b.name.last) ? -1 : 0
                }
            })
        });
        //TOGGLE THE FLAG 
        if (this.state.isAscending === true) {
            //update the sate IS ASCENDING TO FLASE 
            this.setState({
                isAscending: false
            })
        } else {
            this.setState({
                isAscending: true
            })
        }


    }

    //Filter by employees name
    handleInputChange = (event) => {
        const value = event.target.value;
        this.setState({ search: value });
        this.filterEmployees(value.toLowerCase().trim());
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
    };

    // Sorts the filtered employees
    sortBy = (key, primary = 0, secondary = 0) => {
        let sortedEmployees = this.state.filteredEmployees;
        if (this.state.sortDirections[key]) {
            this.setState({
                filteredEmployees: sortedEmployees.reverse(),
                sortDirections: {
                    ...this.initialSortDirections,
                    [key]: this.state.sortDirections[key] === "asc" ? "desc" : "asc",
                },
            });
        } else {
            sortedEmployees = this.state.filteredEmployees.sort((a, b) => {
                a = a[key];
                b = b[key];

                if (primary) {
                    if (secondary && a[primary] === b[primary]) {
                        return a[secondary].localeCompare(b[secondary]);
                    }
                    return a[primary].localeCompare(b[primary]);
                } else {
                    return a.localeCompare(b);
                }
            });

            this.setState({
                filteredEmployees: sortedEmployees,
                sortDirections: {
                    ...this.initialSortDirections,
                    [key]: "asc",
                },
            });
        }

    };

    filterEmployees = (input) => {
        if (input) {
            this.setState({
                filteredEmployees: this.state.employees.filter((employee) => {
                    return (
                        employee.name.first
                            .toLowerCase()
                            .concat(" ", employee.name.last.toLowerCase())
                            .includes(input) ||
                        employee.phone.includes(input) ||
                        employee.phone.replace(/[^\w\s]/gi, "").includes(input) ||
                        employee.email.includes(input) ||
                        this.formatDate(employee.dob.date).includes(input)
                    );
                }),
            });
        } else {
            this.setState({ filteredEmployees: this.state.employees });
        }
    }

    formatDate = (date) => {
        date = new Date(date);
        let dob = [];
        dob.push(("0" + (date.getMonth() + 1)).slice(-2));
        dob.push(("0" + date.getDate()).slice(-2));
        dob.push(date.getFullYear());

        return dob.join("-");
    };

    render() {
        return (
            <>
                <SearchForm
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />

                <div className="container mt-4">
                    <Table
                        state={this.state}
                        sortBy={this.sortBy}
                        filterEmployees={this.filterEmployees}
                        formatDate={this.formatDate}
                    />
                </div>
            </>
        );
    }

}

export default Container;