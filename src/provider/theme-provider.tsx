import { useTheme } from "@/context/theme";
import { Themes as ThemeObject, Theme } from "@/common/theme";
import { ChildNodeType } from "@/common/types";
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        background-color: ${props => props.theme.background};
    }
`
const ThemeProvider: React.FC<ChildNodeType> = ({ children }) => {
    const { theme } = useTheme()
    return (
        <>
            <StyledThemeProvider theme={ThemeObject[theme as "light" | "dark"]}>
                <GlobalStyles />
                {children}
            </StyledThemeProvider>
        </>
    )
}

export default ThemeProvider;