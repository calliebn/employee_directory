const TableRow = (props) => {
    return (
        <tr className="text-center h5 text-light" key={props.index}>
            <td>
                <img src={props.picture.thumbnail} alt={props.name.first + " " + props.name.last} />
            </td>

            <td className="align-middle">{props.name.first} {props.name.last}</td>
            <td className="align-middle"><a href={`mailto${props.email}`}>{props.email}</a></td>
            <td className="align-middle">{props.phone}</td>
            <td className="align-middle">{props.dob}</td>
        </tr>
    )
}

export default TableRow