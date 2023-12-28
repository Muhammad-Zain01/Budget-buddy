import React, { createContext, useState } from "react";

export type ContextState = {
    theme: string;
    setTheme: (theme: string) => void;
}
type ProviderProps = {
    children: React.ReactNode
}
type ThemeTypes = {
    theme: string;
}

const ThemeTypes: ThemeTypes = {
    theme: 'SET_THEME'
}
const defaultValues: ContextState = {
    theme: 'light',
    setTheme: () => { },
}
const ThemeContext = createContext(defaultValues)

export const ThemeProvider: React.FC<ProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState(defaultValues.theme);
    const value: ContextState = { theme, setTheme }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => React.useContext(ThemeContext);