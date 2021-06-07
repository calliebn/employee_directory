import React from "react";
import "./styles.css"

const Header = () => {
    return (
        <header>
            <h1 className="text-center">Employee Directory</h1>
            <p className="text-center">Click on the arrow next to filter by the last name or use the search box to find a specific person</p>
        </header>
    );
};

export default Header;