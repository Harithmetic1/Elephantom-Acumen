import React, { createContext, useState, useEffect } from "react";

export const ElephantContext = createContext({})

export const ElephantProvider = ({ children }) => {
    const [elephantData, setElephantData] = useState()
    const [showTable, setShowTable] = useState(true)
    const [showSidebar, setShowSidebar] = useState(true)

    const getElephants = async () => {
        const elephant = await fetch("http://acumen-elephantom.herokuapp.com/elephants/asian").then(res => res.json())
        setElephantData(elephant.data)
        // console.log(elephantData);
    }

    useEffect(() => {
        getElephants()
    }, [])

    return(
        <ElephantContext.Provider value={{ 
            elephantData, 
            setElephantData, 
            showTable, 
            setShowTable, 
            showSidebar, 
            setShowSidebar
        }} >
            { children }
        </ElephantContext.Provider>
    )
}
