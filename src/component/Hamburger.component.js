import React, { useContext } from "react";

import  { ElephantContext } from "../context/Elephant"

const Hamburger = () => {

    const { showSidebar, setShowSidebar } = useContext(ElephantContext)

    return(
        <>
            <div className="hamburger-menu" onClick={() => setShowSidebar(!showSidebar)} >
                <div></div>
                <div></div>
                <div></div>
            </div>
        </>
    )
}

export default Hamburger;