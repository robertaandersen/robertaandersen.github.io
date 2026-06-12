import { ImageParagraph, MainContainerContentStyle, MainContainerStyle } from '../UI/MainContainer/MainContainerStyle';
import portrait from '../images/roberta.webp'
import { useTranslation } from '../i18n/LanguageContext';
import useDocumentTitle from '../hooks/useDocumentTitle';

const About = () => {
    const { t } = useTranslation();
    useDocumentTitle(t.about.title);
    return (
    <MainContainerStyle>
        <MainContainerContentStyle>
        <ImageParagraph>
        <h1>{t.about.heading}</h1>
            <img src={portrait} alt="roberta"/>
            <p>{t.about.bio_1}</p>
            <p>{t.about.bio_2} <a href="https://histog.bandcamp.com/album/hits-of" data-type="link" data-id="https://histog.bandcamp.com/album/hits-of">{t.about.bio_2_link_text}</a> {t.about.bio_2_suffix}</p>
            <p>{t.about.bio_3}</p>
        </ImageParagraph>
        </MainContainerContentStyle>
    </MainContainerStyle>)
}

export default About;
