import React from "react";

const Tablerow = ({ name, index, species, sex, affiliation, dob }) => {
    return(
        <>
            <tr>
                <td>{index}</td>
                <td>{name}</td>
                <td>{species}</td>
                <td>{sex}</td>
                <td>{affiliation}</td>
                <td>{dob}</td>
            </tr>
        </>
    )
}

export default Tablerow;