import React, { useContext } from "react";
import Breadcrumb from "./Breadcrumb.component";
import Tablerow from "./Tablerow.component";

// import  spinner  from "../images/Spinner.gif"

import { ElephantContext } from "../context/Elephant";

 const TableBody = () => {

    const { elephantData} = useContext(ElephantContext)

    // const [elephantData, setElephantData] = useState([])
     return(
         <>
            <section className="rhs">
                <div className="rhs-container">
                    <Breadcrumb />
                    <section className="table-area">
                        <div className="table-area-container">

                        <div className="table-title">
                            All Elephants
                        </div>
                        <table>
                            <thead>
                                <tr className="table-head">
                                    <th>S/N</th>
                                    <th>Name</th>
                                    <th>Species</th>
                                    <th>Sex</th>
                                    <th>Affiliation</th>
                                    <th>DOB</th>  
                                </tr>
                            </thead>
                            <tbody id="elephant-table">
                                {   
                                    elephantData ?
                                    elephantData.sort((a, b) => (a.index > b.index) ? 1 : -1)
                                    .map((elephant) => (
                                    <Tablerow {...elephant} key={elephant._id}  />
                                ))
                                :
                                <tr>
                                    <td>Loading...</td>
                                </tr>
                                }
                            </tbody>
                            
                        </table>
                    </div>
                    </section>
                </div>
            </section>
         </>
     )
 }

export default TableBody;