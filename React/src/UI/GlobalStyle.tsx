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

    *, *::before, *::after {
        box-sizing: border-box;
    }

    body, html {
        margin: 0;
        font-family: 'Source Serif 4', serif;
        letter-spacing: 0.025rem;
        font-size: 1rem;
        line-height: 1.6;
        font-weight: 400;
        color: #1a1a1a;
        -webkit-font-smoothing: antialiased;
    }

    h1, h2, h3, h4 {
        line-height: 1.2;
        font-weight: 500;
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
    }

    h1 { font-size: clamp(2rem, 5vw, 3rem); }
    h2 { font-size: clamp(1.75rem, 4vw, 2.5rem); }
    h3 { font-size: clamp(1.4rem, 3vw, 2rem); }
    h4 { font-size: clamp(1.15rem, 2.5vw, 1.5rem); }

    p {
        margin-top: 0;
        margin-bottom: 1rem;
    }

    a {
        color: #2563eb;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }

    hr {
        border: none;
        border-top: 1px solid #e5e5e5;
        margin: 1.5rem 0;
    }
`
