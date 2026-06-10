
import styled from "styled-components";
import { ReactComponent as BaseGrid } from './OpenPosition/BaseGrid.svg';
import { ReactComponent as BaseGridNoNut } from './BaseGridNoNut.svg';

const ChordContainerStyle = styled.div`
  width: fit-content;
  min-width: 150px;
  @media (max-width: 480px) {
    min-width: 120px;
  }
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
  ChordDiagram,
  chordName,
}: {
  ChordDiagram: React.FC<React.SVGProps<SVGSVGElement>>;
  chordName: string;
}) => {
  return (
    <ChordContainerStyle>
      <center>
        <hr />
        <h4>{chordName}</h4>
        <ChordGridStyle>
          <BaseGrid />
        </ChordGridStyle>
        <ChordDiagramStyle>
          <ChordDiagram />
        </ChordDiagramStyle>
      </center>
    </ChordContainerStyle>
  );
};

export const MovableChordContainer = ({
  ChordDiagram,
  chordName,
}: {
  ChordDiagram: React.FC<React.SVGProps<SVGSVGElement>>;
  chordName: string;
}) => {
  return (
    <ChordContainerStyle>
      <center>
        <hr />
        <h4>{chordName}</h4>
        <ChordGridStyle>
          <BaseGridNoNut />
        </ChordGridStyle>
        <ChordDiagramStyle>
          <ChordDiagram />
        </ChordDiagramStyle>
      </center>
    </ChordContainerStyle>
  );
};
