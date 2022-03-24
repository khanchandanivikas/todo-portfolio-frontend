import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background:  ${props => props.theme.color.body.bg};
        font-family: 'Josefin Sans', sans-serif;
        transition: background 0.7s ease;
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    }
`

export default GlobalStyles;
