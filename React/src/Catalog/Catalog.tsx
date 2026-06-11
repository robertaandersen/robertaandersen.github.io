import styled from "styled-components";
import { MainContainerContentStyle, MainContainerStyle } from "../UI/MainContainer/MainContainerStyle";
import { useTranslation } from "../i18n/LanguageContext";

const PriceCard = styled.div`
    background: #fafafa;
    border-radius: 8px;
    padding: 1rem 1.5rem;
    margin-bottom: 0.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.25rem;
        padding: 1rem;
    }
`;

const PriceLabel = styled.span`
    font-size: 0.95rem;
`;

const PriceValue = styled.span`
    font-weight: 500;
    font-size: 1.1rem;
    white-space: nowrap;
`;

const Catalog = () => {
    const { t } = useTranslation();
    return (
    <MainContainerStyle>
    <title>{t.catalog.title}</title>
    <MainContainerContentStyle>
        <h1>{t.catalog.heading}</h1>
        <p>{t.catalog.all_private}</p>

        <PriceCard>
            <PriceLabel>{t.catalog.course_12_weeks}</PriceLabel>
            <PriceValue>{t.catalog.price_12_weeks}</PriceValue>
        </PriceCard>
        <PriceCard>
            <PriceLabel>{t.catalog.single_30_min}</PriceLabel>
            <PriceValue>{t.catalog.price_30_min}</PriceValue>
        </PriceCard>
        <PriceCard>
            <PriceLabel>{t.catalog.single_60_min}</PriceLabel>
            <PriceValue>{t.catalog.price_60_min}</PriceValue>
        </PriceCard>
    </MainContainerContentStyle>
    </MainContainerStyle>)
}

export default Catalog;
