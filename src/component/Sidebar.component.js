import React, { useContext } from "react";
import { ElephantContext } from "../context/Elephant";


import sideBarLogo from "../images/Sidebar-logo.png"
import Hamburger from "./Hamburger.component";


const Sidebar = () => {

    const { showTable, setShowTable, showSidebar }  = useContext(ElephantContext)

    return(
        <>
            <section className={showSidebar ? "lhs" : "lhs none"}>
                    <section className="sidebar">
                    <Hamburger />
                        <div className="sidebar-img">
                            <img src={sideBarLogo} alt="Elephant head" />
                        </div>
                        <div className="sidebar-links">
                            <div className={!showTable ? "slinks" : "slinks active"} onClick={() => setShowTable(true)}>
                                <p className="home-link ">Home</p>
                            </div>
                            <div className={showTable ? "slinks" : "slinks active"} onClick={() => setShowTable(false)}>
                                <p className="home-link">Elephant</p>
                            </div>
                        </div>
                    </section>
            </section>
        </>
    )
}

export default Sidebar;