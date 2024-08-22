import { createContext, useContext, useState} from "react";

const ModalContext = createContext();

export const ModalProvider = ({children}) => {

    const useState(false);
    return <ModalContext.Provider>{children}</ModalContext.Provider>

}