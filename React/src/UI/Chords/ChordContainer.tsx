
import styled from "styled-components";
import BaseGrid from './BaseGrid.svg'



const ChordContainerStyle = styled.div`
    width: fit-content;
`

const ChordGridStyle = styled.img`
    position: absolute;
    height: 180px;
`;

const ChordDiagramStyle = styled(ChordGridStyle)`
    position: relative;
`

export const ChordContainer = ({ chordDiagram, chordName }: { chordDiagram: string, chordName: string }) => {


    return (
        <ChordContainerStyle>
            <center>
                <hr />
                <h4>{chordName}</h4>
                <ChordGridStyle src={BaseGrid} />
                <ChordDiagramStyle src={chordDiagram} />
            </center>
        </ChordContainerStyle>
    )
}
