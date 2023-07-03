import React, { useState } from 'react'
import ContextApi from './ContextApi'

const GlobalContext = ({children}) => {

    const [isSidebarOpen, setSidebarOpen] =  useState(false)
    const [pageid, setpageId] = useState(null)

    const openSidebar = () => {
        setSidebarOpen(true)
      
    }

    const closeSidebar = () => {
        setSidebarOpen(false)

    }

    const allPropsValue = {
        openSidebar,
        closeSidebar,
        isSidebarOpen,
        pageid, 
        setpageId
    }


  return (
        <ContextApi.Provider value={{allPropsValue}}>
            {children}
        </ContextApi.Provider>
  )
}

export default GlobalContext