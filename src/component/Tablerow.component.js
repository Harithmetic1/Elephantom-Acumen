import React, { useContext } from "react";

import { ElephantContext } from "../context/Elephant";

const Tablerow = (props) => {

    const { setElephantPageId, setShowTable } = useContext(ElephantContext)

    const populateElephantPage = () => {
        setElephantPageId(props)
        setShowTable(false)
        console.log(props);
    }

    return(
        <>
            <tr onClick={() => populateElephantPage()}>
                <td>{props.index}</td>
                <td>{props.name}</td>
                <td>{props.species}</td>
                <td>{props.sex}</td>
                <td>{props.affiliation}</td>
                <td>{props.dob}</td>
            </tr>
        </>
    )
}

export default Tablerow;