import {createContext, useState} from 'react';

const SidebarContext = createContext()

export const AppContext = (props) => {
    const [isSidebarOpen, setSidebarPosi] = useState(true)
    const [istransparent, setTransparentcy] = useState(false)
    return (
        <SidebarContext.Provider value={{
            isSidebarOpen,
            setSidebarPosi,
            istransparent,
            setTransparentcy,
        }} >
            {props.children}
        </SidebarContext.Provider>   
    )
}

export default SidebarContext;