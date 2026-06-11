import styled from "styled-components";
import { MainContainerContentStyle, MainContainerStyle } from "../UI/MainContainer/MainContainerStyle";
import { useTranslation } from "../i18n/LanguageContext";

const ContactCard = styled.div`
    background: #f9f9f9;
    border-radius: 8px;
    padding: 1.25rem 1.5rem;
    margin-top: 1.5rem;

    p {
        margin-bottom: 0.5rem;
    }

    a {
        word-break: break-all;
    }
`;

const Landing = () => {
    const { t } = useTranslation();
    return (
    <MainContainerStyle>
        <title>{t.landing.title}</title>
        <MainContainerContentStyle>
            <h1>{t.landing.heading}</h1>
            <p>{t.landing.intro}</p>
            <p>{t.landing.electric_or_acoustic}</p>
            <p><strong>{t.landing.everyone_welcome}</strong>!</p>
            <ContactCard>
                <p>{t.landing.contact_prompt}</p>
                <p>{t.landing.email_label}: <a href="mailto:robertaandersen1978@gmail.com">robertaandersen1978@gmail.com</a>
                <br/>{t.landing.phone_label}: 695 3893</p>
            </ContactCard>
        </MainContainerContentStyle>
    </MainContainerStyle>)
}

export default Landing;
