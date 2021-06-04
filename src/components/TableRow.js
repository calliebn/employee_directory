const TableRow = (props) => {
    return (
        <tr className="text-center h5 text-light" key={props.index}>
            <td>
                <img src={props.picture.thumbnail} alt={props.name.first + " " + props.name.last} />
            </td>

            <td className="align-middle">{props.name.first} {props.name.last}</td>
            <td className="align-middle">{props.email}</td>
            <td className="align-middle">{props.phone}</td>
            <td className="align-middle">{props.location.city}, {props.location.state}</td>
            <td className="align-middle">{props.dob.date}</td>
        </tr>
    )
}

export default TableRow