import styled from "styled-components";

export const NavigationContainerStyle = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-bottom: 1px solid #e5e5e5;
    position: sticky;
    top: 0;
    z-index: 100;
    padding: 0 1rem;
    min-height: 48px;
`;

export const LanguageToggleStyle = styled.div`
    position: absolute;
    right: 12px;

    button {
        background: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 4px 10px;
        cursor: pointer;
        font: inherit;
        font-size: 0.85rem;
        font-weight: bold;
    }

    button:hover {
        background-color: #f5f5f5;
    }
`;

export const NavigationMenuStyle = styled.div`
    ul {
        display: flex;
        padding: 0;
        margin: 0;
        gap: 0.25rem;
    }

    li {
        list-style-type: none;
    }

    li a {
        display: block;
        background: none;
        border-bottom: 2px solid transparent;
        cursor: pointer;
        font: inherit;
        font-size: 0.95rem;
        color: #555;
        text-decoration: none;
        padding: 12px 14px;
        transition: color 0.15s, border-color 0.15s;
    }

    li a:hover {
        color: #1a1a1a;
        text-decoration: none;
    }

    li a.active {
        color: #1a1a1a;
        font-weight: 500;
        border-bottom-color: #1a1a1a;
    }

    @media screen and (max-width: 768px) {
        ul {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 48px;
            left: 0;
            right: 0;
            background: #fff;
            border-bottom: 1px solid #e5e5e5;
            padding: 0.5rem 0;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }

        li a {
            width: 100%;
            text-align: center;
            padding: 14px 1rem;
            border-bottom: none;
        }

        li a.active {
            background: #f5f5f5;
            border-bottom: none;
        }

        li a:hover {
            background: #f5f5f5;
        }
    }
`;

export const NavigationMenuExpandedStyle = styled(NavigationMenuStyle)`
    ul {
        display: flex;
    }
`;
