import { createGlobalStyle } from "styled-components";
import SourceSerif4Latin from '../fonts/SourceSerif4Latin.woff2';
import SourceSerif4LatinExt from '../fonts/SourceSerif4LatinExt.woff2'

export const GlobalStyle = createGlobalStyle`

    /* latin-ext */
    @font-face {
        font-family: 'Source Serif 4';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(${SourceSerif4LatinExt}) format('woff2');
        unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
        font-family: 'Source Serif 4';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(${SourceSerif4Latin}) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }


    /* latin-ext */
    @font-face {
        font-family: 'Source Serif 4';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(${SourceSerif4LatinExt}) format('woff2');
        unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
        font-family: 'Source Serif 4';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(${SourceSerif4Latin}) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }


    /* latin-ext */
    @font-face {
        font-family: 'Source Serif 4';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(${SourceSerif4LatinExt}) format('woff2');
        unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
        font-family: 'Source Serif 4';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(${SourceSerif4Latin}) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
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