
import styled from "styled-components";
import BaseGrid from './BaseGrid.svg'
import { ReactSVG } from "react-svg";

const ChordContainerStyle = styled.div`
  width: fit-content;
  min-width: 180px;
`;

const ChordGridStyle = styled.div`
  position: relative;
  height: 180px;
`;

const ChordDiagramStyle = styled(ChordGridStyle)`
  position: relative;
  top: -180px;
`;

export const ChordContainer = ({
  chordDiagram,
  chordName,
}: {
  chordDiagram: string;
  chordName: string;
}) => {
  return (
    <ChordContainerStyle>
      <center>
        <hr />
        <h4>{chordName}</h4>
        <ChordGridStyle>
          <ReactSVG src={BaseGrid} />
        </ChordGridStyle>
        <ChordDiagramStyle>
          <ReactSVG src={chordDiagram} />
        </ChordDiagramStyle>
      </center>
    </ChordContainerStyle>
  );
};
