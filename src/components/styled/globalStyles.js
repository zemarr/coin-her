import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* Color pallette */

    :root {
        --text-font: "F37 Ginger Pro";
        --heading-font: "'F37 Ginger Pro', sans-serif";
        --background-color: #FCFCFD;
        --placeholder-image: #80808033;
        --font-color: #030303;
        --alt-font-color: #777E90;
        --black-font-color: #23262F;
        --primary-color: #F1A801;
    }

    * {
        scroll-behavior: smooth;
    }

    html {
        font-size: 15px;
        font-family: var(--text-font)!important;
    }


    body {
        margin: 0;
        padding: 0;
        background-color: var(--background-color);
        color: var(--font-color);
        font-family: var(--text-font)!important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        scroll-behavior: smooth;
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: var(--text-font)!important;
        font-weight: 700;
    }

    span {
        color: var(--alt-font-color);
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
`;

export default GlobalStyle;