import React from "react";

export default function Table(props) {
    return (
        <tr className="text-center h5 text-light">
            <td>
                <img src={props.photo} alt={props.name} />
            </td>

            <td className="align-middle">{props.name}</td>
            <td className="align-middle">{props.email}</td>
            <td className="align-middle">{props.phone}</td>
            <td className="align-middle">{props.location}</td>
            <td className="align-middle">{props.dob}</td>
        </tr>
    );
}