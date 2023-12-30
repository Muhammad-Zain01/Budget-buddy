
import React from "react"
import UIThemeProvider from "./ui-theme-provider";
import { ThemeProvider as ContextThemeProvider } from "@/context/theme";
import ThemeProvider from "./theme-provider";
import { Poppins } from "next/font/google";

type ComponentProps = {
    children: React.ReactNode
}

const Font = Poppins({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

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