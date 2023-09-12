import { MainContainerContentStyle, MainContainerStyle } from "../UI/MainContainer/MainContainerStyle";

const Book = () => {
    return (
    <MainContainerStyle>
        <title>Bóka Tíma</title>
		<MainContainerContentStyle>
			<h1>Bóka Tíma</h1>
			<p>Best er að slá á þráðinn eða senda mér email og ég hef samband um hæl.</p>
			<p>Netfang: <a href="mailto:robertaandersen1978@gmail.com">robertaandersen1978@gmail.com</a><br />
			Sími: 695 3893
			</p>
		</MainContainerContentStyle>
    </MainContainerStyle>
    );
}

export default Book