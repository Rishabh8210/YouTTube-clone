import {createContext, useState} from 'react';

const SidebarContext = createContext()

export const AppContext = (props) => {
    const [isSidebarOpen, setSidebarPosi] = useState(true)
    return (
        <SidebarContext.Provider value={{
            isSidebarOpen,
            setSidebarPosi
        }} >
            {props.children}
        </SidebarContext.Provider>   
    )
}

export default SidebarContext;