import React from "react";

function SearchForm(props) {
    return (
        <form onSubmit={props.handleFormSubmit}>
            <div className="form-group">
                <input
                    onChange={props.handleInputChange}
                    value={props.search}
                    type="text"
                    className="form-control"
                    placeholder="Search for an employee"
                    id="search"
                />
            </div>
        </form>
    );
}

export default SearchForm;