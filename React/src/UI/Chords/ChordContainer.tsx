import styled from "styled-components";
import { ReactComponent as BaseGrid } from './OpenPosition/BaseGrid.svg';
import { ReactComponent as BaseGridNoNut } from './BaseGridNoNut.svg';

const ChordContainerStyle = styled.div`
  width: fit-content;
  min-width: 120px;
  text-align: center;

  h4 {
    margin: 0.5rem 0 0.25rem;
  }

  hr {
    margin: 0;
  }
`;

const ChordStack = styled.div`
  position: relative;
  width: 120px;
  height: 145px;
  margin: 0 auto;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
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
      <hr />
      <h4>{chordName}</h4>
      <ChordStack>
        <BaseGrid />
        <ChordDiagram />
      </ChordStack>
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
      <hr />
      <h4>{chordName}</h4>
      <ChordStack>
        <BaseGridNoNut />
        <ChordDiagram />
      </ChordStack>
    </ChordContainerStyle>
  );
};
