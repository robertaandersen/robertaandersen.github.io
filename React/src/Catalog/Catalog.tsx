import { MainContainerContentStyle, MainContainerStyle } from "../UI/MainContainer/MainContainerStyle";

const Catalog = () => {
    return (
    <MainContainerStyle>
    <title>Verðskrá</title>
    <MainContainerContentStyle>
    <h1>Verðskrá</h1>
        <p>Allir tímar eru einkatímar og allt námsefni er innifalið.</p>
        <p>Námskeið 12 vikur (12 * 30 mín)<br />
        Verð: 60.000 kr.</p>
        <p>Stakir tímar (30 mín)<br />
        Verð: 6000 kr.</p>
        <p>Stakir tímar (1 klst)<br />
        Verð: 11.000kr.</p>
    </MainContainerContentStyle>
    </MainContainerStyle>)
}

export default Catalog;