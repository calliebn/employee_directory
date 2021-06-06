import React from "react";
// import API from "../utils/API";
import TableRow from "./TableRow"
// import SearchForm from "./SearchForm";
import "./styles.css";

const Table = (props) => {
    return (
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
    )
}

// class Table extends Component {
//     state = {
//         search: "",
//         results: [],
//         isAscending: true,
//         filteredEmployees: []
//     }
//     //Loads random users from the API when the component mounts
//     componentDidMount() {
//         API.getEmployees()
//             .then(res => {
//                 console.log("API RESULT", res.data.results);
//                 this.setState({
//                     results: res.data.results,
//                     filterEmployees: res.data.results

//                 })
//             })
//             .catch(err => console.log(err))
//     }

//     //Sorts the data in ascending or descending order by the employee's last name
//     sortingData = (event) => {
//         console.log(this.state.isAscending);
//         event.preventDefault();
//         this.setState({
//             results: this.state.results.sort((a, b) => {
//                 if (this.state.isAscending === true) {
//                     //arange it ascending order by FIRST NAMES only 
//                     return (a.name.last < b.name.last) ? -1 : (a.name.last > b.name.last) ? 1 : 0
//                 } else {
//                     //Descending order 
//                     return (a.name.last < b.name.last) ? 1 : (a.name.last > b.name.last) ? -1 : 0
//                 }
//             })
//         });
//         //TOGGLE THE FLAG 
//         if (this.state.isAscending === true) {
//             //update the sate IS ASCENDING TO FLASE 
//             this.setState({
//                 isAscending: false
//             })
//         } else {
//             this.setState({
//                 isAscending: true
//             })
//         }


//     }

//     // Filters the data by the employee's name
//     handleInputChange = (event) => {
//         const value = event.target.value;
//         this.setState({ search: value });
//         // this.filterEmployees({ search: value });
//     };

//     // add filterEmployee function

//     handleFormSubmit = (event) => {
//         event.preventDefault();
//     };

//     // renders the table
//     render() {
//         return (
//             <wrapper>
//                 <SearchForm handleInputChange={this.handleInputChange} search={this.state.search} />

//                 <table className="table table-striped">
//                     <thead>
//                         <tr>
//                             <th scope="col"></th>
//                             <th scope="col">Name <i className="fas fa-sort" onClick={this.sortingData}></i></th>
//                             <th scope="col">Email</th>
//                             <th scope="col">Phone</th>
//                             <th scope="col">DOB</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             this.state.results.map((employee, index) => (
//                                 <TableRow
//                                     picture={employee.picture}
//                                     name={employee.name}
//                                     email={employee.email}
//                                     phone={employee.phone}
//                                     dob={employee.dob}
//                                     index={index}
//                                 />

//                             ))
//                         }

//                     </tbody>
//                 </table>
//             </wrapper>
//         );
//     }
// };

export default Table;