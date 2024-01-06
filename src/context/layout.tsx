import React, { createContext, useState } from "react";

export type ContextState = {
    sidebar: boolean;
    toggleSidebar: () => void;
}
type ProviderProps = {
    children: React.ReactNode
}
const defaultValues: ContextState = {
    sidebar: false,
    toggleSidebar: () => { },
}
const LayoutContext = createContext(defaultValues)

export const LayoutProvider: React.FC<ProviderProps> = ({ children }) => {
    const [sidebar, setSidebar] = useState<boolean>(defaultValues.sidebar);
    const toggleSidebar = () => setSidebar(!sidebar)
    const value: ContextState = { sidebar, toggleSidebar }
    return (
        <LayoutContext.Provider value={value}>
            {children}
        </LayoutContext.Provider>
    )
}

export const useLayout = () => React.useContext(LayoutContext);