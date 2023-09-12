import { ImageParagraph, MainContainerContentStyle, MainContainerStyle } from '../UI/MainContainer/MainContainerStyle';
import portrait from '../images/roberta.jpeg'

console.log(portrait);
const About = () => {
    return (
    <MainContainerStyle>
        <title>Um Mig</title>
        <MainContainerContentStyle>
        <ImageParagraph>
        <h1>Um Mig</h1>
            <img src={portrait} alt="roberta"/>
            <p>Róberta Andersen heiti ég og hef kennt á gítar síðan 2000. Ég útskrifaðist með burtfararpróf úr tónlistarskóla FÍH 2003 auk þess að stunda nám íhljóðfæraleik við Kungliga Musikhögskolan í Stokkhólmi.</p>
            <p>Ég hef starfað með ýmsu tónlistarfólki í gegnum tíðina, meðal annars Múm, Bogomil Font, Benna Hemm Hemm og <a href="https://histog.bandcamp.com/album/hits-of" data-type="link" data-id="https://histog.bandcamp.com/album/hits-of">Hist Og</a> svo eitthvað sé nefnt.</p>
            <p>Ég starfa einnig sem forritari auk þess að kenna og spila á gítar!</p>
        </ImageParagraph>
        </MainContainerContentStyle>
    </MainContainerStyle>)
}

export default About;