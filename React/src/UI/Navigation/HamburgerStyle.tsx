import styled from "styled-components";

const HamburgerStyle = styled.button`
    border: 0;
    height: 40px;
    width: 40px;
    margin-right: 40px;
    padding: 0.5rem;
    border-radius: 50%;
    cursor: pointer;
    align-self: flex-end;
    transition: background-color 0.2s ease-in-out;
    display: none;
    &:hover {
        background-color: white;
    }

    @media screen and (max-width: 768px) {
        display: block;
    }
`

export default HamburgerStyle