
import React from "react"
import UIThemeProvider from "./theme-provider";
import { ThemeProvider } from "@/context/theme";
import { GlobalStyle } from "./global-style";
import { useTheme } from "@/context/theme";
type ComponentProps = {
    children: React.ReactNode
}
const GlobalProvider: React.FC<ComponentProps> = ({ children }): JSX.Element => {
    const { theme } = useTheme()
    return (
        <UIThemeProvider>
            <GlobalStyle theme={theme} />
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </UIThemeProvider>
    )
}

export default GlobalProvider;