import { createGlobalStyle } from "styled-components"

export const lightModeTheme = {
    background: 'hsl(0, 0%, 98%)',
    element: 'hsl(0, 0%, 100%)',
    text: 'hsl(200, 15%, 8%)',  
}

export const darkModeTheme = {
    background: 'hsl(207, 26%, 17%)',
    element: 'hsl(209, 23%, 22%)',
    text: 'hsl(0, 0%, 100%)',
}

export const GlobalStyles = createGlobalStyle`
    /* body{
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme.text};
        transition: all 0.50s linear;
    } */
`