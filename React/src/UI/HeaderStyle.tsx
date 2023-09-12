import styled from "styled-components";
import portrait from '../images/banner.jpg'

const HeaderStyle = styled.div `
    img {
        width: 100%;
    }
    `

const Header = () => {
    return (
        <HeaderStyle>
            <img src={portrait} />
        </HeaderStyle>
    )
}

export default Header