import styled from "styled-components";

const HamburgerStyle = styled.button`
    border: 0;
    background: none;
    height: 40px;
    width: 40px;
    padding: 0.5rem;
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    left: 12px;
    transition: background-color 0.2s ease-in-out;
    display: none;

    &:hover {
        background-color: #f0f0f0;
    }

    @media screen and (max-width: 768px) {
        display: block;
    }
`

export default HamburgerStyle
