
import React from "react"
import UIThemeProvider from "./ui-theme-provider";
import { ThemeProvider as ContextThemeProvider } from "@/context/theme";
import ThemeProvider from "./theme-provider";
type ComponentProps = {
    children: React.ReactNode
}

const GlobalProvider: React.FC<ComponentProps> = ({ children }): JSX.Element => {
    return (
        <UIThemeProvider>
            <ContextThemeProvider>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </ContextThemeProvider>
        </UIThemeProvider>
    )
}

export default GlobalProvider;