import styled from "styled-components";
import portrait from '../images/banner.webp'

const HeaderStyle = styled.div `
    img {
        width: 100%;
    }
    `

const Header = () => {
    return (
        <HeaderStyle>
            <img src={portrait} alt="Gítarkennsla Robertu Andersen" />
        </HeaderStyle>
    )
}

export default Header