import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* Color pallette */

    :root {
        --text-font: "F37 Ginger Pro";
        --heading-font: "'F37 Ginger Pro', sans-serif";
        --background-color: transparent;
        --font-color: #030303;
    }

    * {
        scroll-behavior: smooth;
    }

    html {
        font-size: 15px;
    }


    body {
        margin: 0;
        padding: 0;
        background-color: var(--background-color);
        color: var(--font-color);
        font-family: var(--text-font);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        scroll-behavior: smooth;
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: var(--text-font)!important;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
`;

export default GlobalStyle;