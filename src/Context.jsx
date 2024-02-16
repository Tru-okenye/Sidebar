import React, {useContext, useState} from "react";

const AppContext = React.createContext();

const AppProvider = ({children})=> {

    const[showSidebar, setShowSidebar] =useState(false);
    const[showModal, setShowModal] = useState(false);

    const openSidebar = () => {
setShowSidebar(true);
    }
    const openModal = () => {
        setShowModal(true);
    }
     const closeSidebar = () => {
setShowSidebar(false);
    }
    const closeModal = () => {
        setShowModal(false);
    }
    
    return(
        <AppContext.Provider value={{
            showSidebar,
            showModal,
            openModal,
            openSidebar,
            closeSidebar,
            closeModal
        }}>
            {children}
        </AppContext.Provider>
    )
    console.log(AppProvider);
}
export const useGlobalContext = () => {
    return(
    useContext(AppContext)
    )
}
export{AppContext, AppProvider}