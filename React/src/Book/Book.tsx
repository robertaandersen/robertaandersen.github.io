import { MainContainerContentStyle, MainContainerStyle } from "../UI/MainContainer/MainContainerStyle";
import { useTranslation } from "../i18n/LanguageContext";

const Book = () => {
    const { t } = useTranslation();
    return (
    <MainContainerStyle>
        <title>{t.book.title}</title>
		<MainContainerContentStyle>
			<h1>{t.book.heading}</h1>
			<p>{t.book.description}</p>
			<p>{t.book.email_label}: <a href="mailto:robertaandersen1978@gmail.com">robertaandersen1978@gmail.com</a><br />
			{t.book.phone_label}: 695 3893
			</p>
		</MainContainerContentStyle>
    </MainContainerStyle>
    );
}

export default Book
