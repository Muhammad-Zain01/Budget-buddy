export type TokenData = {
    token: {
        colorPrimary: string;
        borderRadius: number;
    }
}

type ThemeType = {
    color: string;
    background: string;
}
export type Theme = {
    'dark': ThemeType;
    'light': ThemeType;
}
export const Themes : Theme = {
    "light": {
        color: '#656d88',
        background: '#ffffff',
    },
    "dark": {
        color: '#444c56',
        background: '#22272e',
    }
}
export const AntTheme = {
    token: {
        colorPrimary: "#2250b2",
        borderRadius: 4,
    }
}