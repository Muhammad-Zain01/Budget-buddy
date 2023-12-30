import { Poppins } from "next/font/google";
const Font = Poppins({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

export type TokenData = {
    token: {
        colorPrimary: string;
        borderRadius: number;
    }
}

type ThemeType = {
    color: string;
    background: string;
    contentBackground: string;
}
export type Theme = {
    'dark': ThemeType;
    'light': ThemeType;
}
export const Themes : Theme = {
    "light": {
        color: '#172432',
        background: '#ffffff',
        contentBackground: '#ffffff',
    },
    "dark": {
        color: '#fdfdfe',
        background: '#172737fa',
        contentBackground: '#172432',
    }
}
export const AntTheme = {
    token: {
        colorPrimary: "#2250b2",
        borderRadius: 4,
        fontFamily: Font.style.fontFamily
    },
}