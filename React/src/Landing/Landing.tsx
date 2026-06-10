import { MainContainerContentStyle, MainContainerStyle } from "../UI/MainContainer/MainContainerStyle";
import { useTranslation } from "../i18n/LanguageContext";

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
                <p>{t.landing.contact_prompt}</p>
                <p>{t.landing.email_label}: <a href="mailto:robertaandersen1978@gmail.com">robertaandersen1978@gmail.com</a>
                <br/>{t.landing.phone_label}: 695 3893
            </p>
        </MainContainerContentStyle>
    </MainContainerStyle>)
}

export default Landing;