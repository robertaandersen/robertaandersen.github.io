import styled from "styled-components";
import { useTranslation } from "../i18n/LanguageContext";

const FooterStyle = styled.footer`
    border-top: 1px solid #e5e5e5;
    padding: 1.5rem 1rem;
    margin-top: 3rem;
    text-align: center;
    font-size: 0.85rem;
    color: #666;

    a {
        color: #666;
    }

    p {
        margin: 0.25rem 0;
    }
`;

const Footer = () => {
    const { t } = useTranslation();
    return (
        <FooterStyle>
            <p><a href="mailto:robertaandersen1978@gmail.com">{t.footer.email}</a> · {t.footer.phone}</p>
            <p>{t.footer.copyright}</p>
        </FooterStyle>
    );
};

export default Footer;
