import styled from "styled-components";

export const NavigationContainerStyle = styled.div `
    display: flex;
    flex-direction: column;
    background-color: #fff;
    color: black;
`
export  const NavigationMenuStyle = styled.div `
    align-self: center;

    ul {
        display: flex;
        padding: 5px;
    }
    li {
        list-style-type: none;
        margin: 0 1rem;
    }

    li button {
        background: none;
        border: none;
        cursor: pointer;
        font: inherit;
        text-decoration: none;
        display: block;
        color: black;
        width: 100%;
        padding: 0;
    }

    li button:hover {
        text-decoration-line: underline;
    }

    @media screen and (max-width: 768px) {

        ul {
            padding: 20px;
            width: 100%;
            background-color: white;
            display: none;
        }

        li {
            text-align: center;
            margin: 0;
            width: 100;
        }

        li button {
            color: black;
            width: 100%;
            padding: 1.5rem 0;
        }

        li:hover {
            background-color: #eee;
        }
    }
`

export const NavigationMenuExpandedStyle= styled(NavigationMenuStyle)`
    ul {
        display: block;
    }
`

