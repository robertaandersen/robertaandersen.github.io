import { createGlobalStyle } from "styled-components";

const fontUrl = `${process.env.PUBLIC_URL}/SourceSerif4Latin.woff2`;

export const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'Source Serif 4';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(${fontUrl}) format('woff2');
    }

    @font-face {
        font-family: 'Source Serif 4';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(${fontUrl}) format('woff2');
    }

    @font-face {
        font-family: 'Source Serif 4';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(${fontUrl}) format('woff2');
    }

    body, html {
        margin: 0;
        font-family: 'Source Serif 4', serif;
        letter-spacing: 0.025rem;
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 400;
    }

    h1, h2, h3, h4 {
        line-height: 0.75;
        font-weight: 400;
        margin-top: 1.25rem;
    }

    h1 { font-size: 3.5rem;}
    h2 { font-size: 3.0rem;}
    h3 { font-size: 2.5rem;}
    h4 { font-size: 2.0rem;}
`