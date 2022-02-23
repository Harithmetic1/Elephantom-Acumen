import React, { useContext, useEffect, useState } from 'react'
import ElephantPage from './component/ElephantPage.component';
import Sidebar from './component/Sidebar.component';
import TableBody from './component/TableBody.component';

import { ElephantContext } from './context/Elephant';


const Homepage = () => {

    const { showTable, elephantData } = useContext(ElephantContext)
    const [ randNum, setRandNum ] = useState(0)

    useEffect(() => {
        if (!showTable){
                setRandNum(Math.floor(Math.random() * (39)))
        }
    }, [showTable])

    return(
        <>
        <div className="container">
            <Sidebar />
            {  showTable
                ?
                <TableBody />
                :
                <ElephantPage {...elephantData[randNum]} />}
        </div>
        </>
    )
}

export default Homepage;