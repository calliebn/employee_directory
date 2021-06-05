import React, { Component } from "react";
import API from "../utils/API"
import TableRow from "./TableRow";

class Table extends Component {
    state = {
        search: "",
        results: [],
        isAscending: true
    }
    componentDidMount() {
        API.getEmployees()
            .then(res => {
                console.log("API RESULT", res.data.results);
                this.setState({
                    results: res.data.results

                })
            })
            .catch(err => console.log(err))
    }
    sortingData = (event) => {
        console.log(this.state.isAscending);
        event.preventDefault();
        this.setState({
            results: this.state.results.sort((a, b) => {
                if (this.state.isAscending === true) {
                    //arange it ascending order by FIRST NAMES only 
                    return (a.name.first < b.name.first) ? -1 : (a.name.first > b.name.first) ? 1 : 0
                } else {
                    //Descending order 
                    return (a.name.first < b.name.first) ? 1 : (a.name.first > b.name.first) ? -1 : 0
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
    render() {
        return (
            <wrapper>

                <table className="table table-striped">
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
                                    picture={employee.picture}
                                    name={employee.name}
                                    email={employee.email}
                                    phone={employee.phone}
                                    dob={employee.dob}
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