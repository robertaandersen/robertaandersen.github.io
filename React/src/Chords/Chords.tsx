import { MainContainerContentStyle } from '../UI/MainContainer/MainContainerStyle';
import { ReactComponent as Emajor } from '../UI/Chords/OpenPosition/EMajor.svg'
import { ReactComponent as Amajor } from '../UI/Chords/OpenPosition/AMajor.svg'
import { ReactComponent as Dmajor } from '../UI/Chords/OpenPosition/DMajor.svg'
import { ReactComponent as Gmajor } from '../UI/Chords/OpenPosition/GMajor.svg'
import { ReactComponent as Cmajor } from '../UI/Chords/OpenPosition/CMajor.svg'
import { ReactComponent as Eminor } from '../UI/Chords/OpenPosition/EMinor.svg'
import { ReactComponent as Aminor } from '../UI/Chords/OpenPosition/AMinor.svg'
import { ReactComponent as Emajor7 } from '../UI/Chords/OpenPosition/EMajor7.svg'
import { ReactComponent as Amajor7 } from '../UI/Chords/OpenPosition/AMajor7.svg'
import styled from 'styled-components';
import { ChordContainer } from '../UI/Chords/ChordContainer';
import { useTranslation } from '../i18n/LanguageContext';


const ChordGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
`;

const Chords = () => {
    const { t } = useTranslation();
    return (
        <MainContainerContentStyle>
          <h1>{t.chords.heading}</h1>

          <h3>{t.chords.major_chords}</h3>
          <ChordGrid>
            <ChordContainer ChordDiagram={Emajor} chordName="E" />
            <ChordContainer ChordDiagram={Amajor} chordName="A" />
            <ChordContainer ChordDiagram={Dmajor} chordName="D" />
            <ChordContainer ChordDiagram={Gmajor} chordName="G" />
            <ChordContainer ChordDiagram={Cmajor} chordName="C" />
          </ChordGrid>

          <h3>{t.chords.minor_chords}</h3>
          <ChordGrid>
            <ChordContainer ChordDiagram={Eminor} chordName="Em" />
            <ChordContainer ChordDiagram={Aminor} chordName="Am" />
          </ChordGrid>

          <h3>{t.chords.seventh_chords}</h3>
          <ChordGrid>
            <ChordContainer ChordDiagram={Emajor7} chordName="E7" />
            <ChordContainer ChordDiagram={Amajor7} chordName="A7" />
          </ChordGrid>
        </MainContainerContentStyle>
    );
}

export default Chords
