import styled from "styled-components";
import portrait from '../images/banner.webp'

const HeaderStyle = styled.div`
    img {
        width: 100%;
        max-height: 200px;
        object-fit: cover;
        display: block;
    }

    @media (max-width: 480px) {
        img {
            max-height: 120px;
        }
    }
`;

const Header = () => {
    return (
        <HeaderStyle>
            <img src={portrait} alt="Gítarkennsla Robertu Andersen" />
        </HeaderStyle>
    )
}

export default Header
