import React, { useContext } from "react";

import { ElephantContext } from "../context/Elephant";
import Hamburger from "./Hamburger.component";

const Breadcrumb = ({ name }) => {

    const { showTable } = useContext(ElephantContext)

    return(
        <>
            <div className="table-area-header">
                <Hamburger />
                <ul id="breadcrumb">
                    <li><p>Acumen Digital Interview Task / Elephantom</p></li>
                    {
                        !showTable ? 
                        <li className="crumb"><p>{name}</p></li>
                        : ""
                    }
                </ul>
            </div>
        </>
    )
}

export default Breadcrumb;