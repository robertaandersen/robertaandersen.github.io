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

    li a {
        text-decoration: none;
        display: block;
        color: black;
        width: 100%;
    }

    li a:hover {
        text-decoration-line: underline;
    }

    li a:visited{

        text-decoration: none;
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

        li a {
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

