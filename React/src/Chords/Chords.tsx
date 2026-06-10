
import { MainContainerContentStyle, MainContainerStyle } from '../UI/MainContainer/MainContainerStyle';
import { ReactComponent as Emajor } from '../UI/Chords/EMajor.svg'
import { ReactComponent as Amajor } from '../UI/Chords/AMajor.svg'
import { ReactComponent as Dmajor } from '../UI/Chords/DMajor.svg'
import { ReactComponent as Gmajor } from '../UI/Chords/GMajor.svg'
import { ReactComponent as Cmajor } from '../UI/Chords/CMajor.svg'
import { ReactComponent as Eminor } from '../UI/Chords/EMinor.svg'
import { ReactComponent as Aminor } from '../UI/Chords/AMinor.svg'
import { ReactComponent as Emajor7 } from '../UI/Chords/EMajor7.svg'
import { ReactComponent as Amajor7 } from '../UI/Chords/AMajor7.svg'
import styled from 'styled-components';
import { ChordContainer } from '../UI/Chords/ChordContainer';


const ChordPageStyle = styled(MainContainerContentStyle)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const Chords = () => {
    return (
      <MainContainerStyle>
        <title>Gítargrip</title>
        <MainContainerContentStyle>
          <h1>Nokkur Gítargrip</h1>
          <h3>Dúr hljómar</h3>
          <ChordPageStyle>
            <ChordContainer {...{ ChordDiagram: Emajor, chordName: "E" }} />
            <ChordContainer {...{ ChordDiagram: Amajor, chordName: "A" }} />
            <ChordContainer {...{ ChordDiagram: Dmajor, chordName: "D" }} />
            <ChordContainer {...{ ChordDiagram: Gmajor, chordName: "G" }} />
            <ChordContainer {...{ ChordDiagram: Cmajor, chordName: "C" }} />
          </ChordPageStyle>

          <h3>Moll hljómar</h3>
          <ChordPageStyle>
            <ChordContainer {...{ ChordDiagram: Eminor, chordName: "Em" }} />
            <ChordContainer {...{ ChordDiagram: Aminor, chordName: "Am" }} />
          </ChordPageStyle>

          <h3>7-undar hljómar</h3>
          <ChordPageStyle>
            <ChordContainer {...{ ChordDiagram: Emajor7, chordName: "E7" }} />
            <ChordContainer {...{ ChordDiagram: Amajor7, chordName: "A7" }} />
          </ChordPageStyle>
        </MainContainerContentStyle>
      </MainContainerStyle>
    );
}

export default Chords