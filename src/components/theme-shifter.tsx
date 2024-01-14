import { useTheme } from "@/context/theme";
import { DarkMode, LightMode } from "./icon";
import { ThemeShiftSpan } from "@/styles/dashboard";

const ThemeShifter: React.FC = (): JSX.Element => {
    const {theme, toggleTheme} = useTheme()
    return (
        <ThemeShiftSpan>
            {theme === 'dark' && <LightMode onClick={toggleTheme} size={25}  />}
            {theme === 'light' && <DarkMode onClick={toggleTheme} size={25}/>}
        </ThemeShiftSpan>
    )
}
export default ThemeShifter;