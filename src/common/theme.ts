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
    cardBackground: string;
    cardShadow: string;
}
export type Theme = {
    'dark': ThemeType;
    'light': ThemeType;
}
export const Themes: Theme = {
    "light": {
        color: '#172432',
        background: '#efefef',
        contentBackground: '#f2f2f2',
        hoverShade: '#d3d3ff33',
        cardBackground: 'white',
        cardShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
    },
    "dark": {
        color: '#fdfdfe',
        background: '#172737fa',
        hoverShade: '#d3d3ff33',
        contentBackground: '#172432',
        cardBackground: '#273645',
        cardShadow: 'rgb(0 0 0 / 29%) 0px 48px 100px 0px',
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