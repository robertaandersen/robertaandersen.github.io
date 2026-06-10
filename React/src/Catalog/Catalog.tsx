import { MainContainerContentStyle, MainContainerStyle } from "../UI/MainContainer/MainContainerStyle";
import { useTranslation } from "../i18n/LanguageContext";

const Catalog = () => {
    const { t } = useTranslation();
    return (
    <MainContainerStyle>
    <title>{t.catalog.title}</title>
    <MainContainerContentStyle>
    <h1>{t.catalog.heading}</h1>
        <p>{t.catalog.all_private}</p>
        <p>{t.catalog.course_12_weeks}<br />
        {t.catalog.price_label}: {t.catalog.price_12_weeks}</p>
        <p>{t.catalog.single_30_min}<br />
        {t.catalog.price_label}: {t.catalog.price_30_min}</p>
        <p>{t.catalog.single_60_min}<br />
        {t.catalog.price_label}: {t.catalog.price_60_min}</p>
    </MainContainerContentStyle>
    </MainContainerStyle>)
}

export default Catalog;
