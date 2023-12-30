import { Poppins } from "next/font/google";
const Font = Poppins({
    weight: ['400', '500', '600', '700'],
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
    hoverShade: string;
}
export type Theme = {
    'dark': ThemeType;
    'light': ThemeType;
}
export const Themes: Theme = {
    "light": {
        color: '#172432',
        background: '#ffffff',
        contentBackground: '#ffffff',
        hoverShade: '#d3d3ff33'
    },
    "dark": {
        color: '#fdfdfe',
        background: '#172737fa',
        hoverShade: '#d3d3ff33',
        contentBackground: '#172432',
    }
}
export const AntTheme = {
    token: {
        colorPrimary: "#2250b2",
        // colorPrimaryBg: "#2250b2",
        borderRadius: 4,
        fontSize: 15,
        fontFamily: Font.style.fontFamily
    },
}