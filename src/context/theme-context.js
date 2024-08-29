import { Children } from "react";
import { createContext, useContext, useReducer, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = () => {
    return <ThemeContext.Provider>{Children}</ThemeContext.Provider>
}