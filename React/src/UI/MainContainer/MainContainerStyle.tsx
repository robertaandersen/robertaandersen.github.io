import styled from "styled-components";

export const MainContainerStyle = styled.div`
    width: 100%;
    padding: 20px;
    `

export const MainContainerContentStyle = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 700px;

  @media (max-width: 480px) {
    margin-left: 15px;
    margin-right: 15px;
  }
`;


export const ImageParagraph = styled(MainContainerStyle)`
    img {
        max-width: 225px;
        float: left;
        margin-right: 15px;
        padding-right: 15px;
    }
`