import styled from "styled-components";
import { MainContainerContentStyle, MainContainerStyle } from "../UI/MainContainer/MainContainerStyle";
import { useTranslation } from "../i18n/LanguageContext";
import useDocumentTitle from "../hooks/useDocumentTitle";

const ContactInfo = styled.div`
    background: #fafafa;
    border-radius: 8px;
    padding: 1.25rem 1.5rem;
    margin-top: 1rem;

    p {
        margin-bottom: 0.5rem;
    }

    a {
        word-break: break-all;
    }
`;

const Book = () => {
    const { t } = useTranslation();
    useDocumentTitle(t.book.title);
    return (
    <MainContainerStyle>
		<MainContainerContentStyle>
			<h1>{t.book.heading}</h1>
			<p>{t.book.description}</p>
			<ContactInfo>
				<p>{t.book.email_label}: <a href="mailto:robertaandersen1978@gmail.com">robertaandersen1978@gmail.com</a></p>
				<p>{t.book.phone_label}: <a href="tel:+3546953893">695 3893</a></p>
			</ContactInfo>
		</MainContainerContentStyle>
    </MainContainerStyle>
    );
}

export default Book
