import React, { useContext } from 'react'
import ElephantPage from './component/ElephantPage.component';
import Sidebar from './component/Sidebar.component';
import TableBody from './component/TableBody.component';

import { ElephantContext } from './context/Elephant';


const Homepage = () => {

    const { showTable, elephantPageId } = useContext(ElephantContext)

    return(
        <>
        <div className="container">
            <Sidebar />
            {  showTable
                ?
                <TableBody />
                :
                <ElephantPage {...elephantPageId} />}
        </div>
        </>
    )
}

export default Homepage;