
import { MainContainerContentStyle, MainContainerStyle } from '../UI/MainContainer/MainContainerStyle';
import Emajor from '../UI/Chords/EMajor.svg'
import Amajor from '../UI/Chords/AMajor.svg'
import Dmajor from '../UI/Chords/DMajor.svg'
import Gmajor from '../UI/Chords/GMajor.svg'
import Cmajor from '../UI/Chords/CMajor.svg'
import Eminor from '../UI/Chords/EMinor.svg'
import Aminor from '../UI/Chords/AMinor.svg'
import Emajor7 from '../UI/Chords/EMajor7.svg'
import Amajor7 from '../UI/Chords/AMajor7.svg'
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
                    <ChordContainer {...{ chordDiagram: Emajor, chordName: 'E' }} />
                    <ChordContainer {...{ chordDiagram: Amajor, chordName: 'A' }} />
                    <ChordContainer {...{ chordDiagram: Dmajor, chordName: 'D' }} />
                    <ChordContainer {...{ chordDiagram: Gmajor, chordName: 'G' }} />
                    <ChordContainer {...{ chordDiagram: Cmajor, chordName: 'C' }} />
                </ChordPageStyle>

                <h3>Moll hljómar</h3>
                <ChordPageStyle>
                    <ChordContainer {...{ chordDiagram: Eminor, chordName: 'Em' }} />
                    <ChordContainer {...{ chordDiagram: Aminor, chordName: 'Am' }} />
                </ChordPageStyle>

                <h3>7-undar hljómar</h3>
                <ChordPageStyle>
                    <ChordContainer {...{ chordDiagram: Emajor7, chordName: 'E7' }} />
                    <ChordContainer {...{ chordDiagram: Amajor7, chordName: 'A7' }} />
                </ChordPageStyle>


            </MainContainerContentStyle>
        </MainContainerStyle>
    );
}

export default Chords