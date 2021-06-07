import React, { Component } from "react";
import API from "../utils/API";
import TableRow from "./TableRow"
import SearchForm from "./SearchForm";
import "./styles.css";


class Table extends Component {
    state = {
        search: "",
        results: [],
        isAscending: true,
    }
    //Loads random users from the API when the component mounts
    componentDidMount() {
        this.getEmployees();
    }

    // Generates a list of employees
    getEmployees = () => {
        API.getEmployees()
            .then(res => {
                this.setState({
                    results: res.data.results,
                })
            })
            .catch(err => console.log(err))
    }

    // Filters the data by name
    searchPeople = event => {
        event.preventDefault();
        console.log("Filter user", this.state.search);
        if (this.state.search === "") {
            //resetting the table
            this.getEmployees();
        } else {

            //Filters out the specific user 
            const filteredEmployees = this.state.results.filter(employee => employee.name.first.toLowerCase() === this.state.search.toLowerCase() || employee.name.last.toLowerCase() === this.state.search.toLowerCase());
            console.log(filteredEmployees)
            this.setState({ results: filteredEmployees })

        }

    }

    handleInputChange = event => {
        event.preventDefault();
        console.log("HIC", event.target.value);
        this.setState({
            search: event.target.value
        })

    }

    //Sorts the data in ascending or descending order by the employee's last name
    sortingData = (event) => {
        console.log(this.state.isAscending);
        event.preventDefault();
        this.setState({
            results: this.state.results.sort((a, b) => {
                if (this.state.isAscending === true) {
                    //arange it ascending order by LAST NAMES only 
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

    // Formats the DOB
    formatDate = (date) => {
        date = new Date(date);
        let dob = [];
        dob.push(("0" + (date.getMonth() + 1)).slice(-2));
        dob.push(("0" + date.getDate()).slice(-2));
        dob.push(date.getFullYear());
        return dob.join("-");
    }

    // renders the table
    render() {
        return (
            <wrapper>
                <SearchForm handleInputChange={this.handleInputChange} search={this.state.search} handleFormSubmit={this.searchPeople} />

                <table className="table table-light table-striped">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Name <i className="fas fa-sort" onClick={this.sortingData}></i></th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">DOB</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.results.map((employee, index) => (
                                <TableRow
                                    key={index}
                                    picture={employee.picture}
                                    name={employee.name}
                                    email={employee.email}
                                    phone={employee.phone}
                                    dob={this.formatDate(employee.dob.date)}
                                    index={index}
                                />

                            ))
                        }

                    </tbody>
                </table>
            </wrapper>
        );
    }
};

export default Table;