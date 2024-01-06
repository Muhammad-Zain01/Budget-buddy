import React, { createContext, useState } from "react";

export type ContextState = {
    theme: "light" | "dark";
    toggleTheme: () => void;
}
type ProviderProps = {
    children: React.ReactNode
}

const defaultValues: ContextState = {
    theme: 'light',
    toggleTheme: () => { },
}
const ThemeContext = createContext(defaultValues)

export const ThemeProvider: React.FC<ProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<"light" | "dark">(defaultValues.theme);
    const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : "dark")
    const value: ContextState = { theme, toggleTheme }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => React.useContext(ThemeContext);