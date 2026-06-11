import { MainContainerContentStyle } from "../UI/MainContainer/MainContainerStyle";
import styled from "styled-components";
import { useTranslation } from "../i18n/LanguageContext";
import { MovableChordContainer } from "../UI/Chords/ChordContainer";
import { ReactComponent as Maj7ChordE } from "../UI/Chords/Maj7ChordE.svg";
import { ReactComponent as Dom7ChordE } from "../UI/Chords/Dom7ChordE.svg";
import { ReactComponent as Min7ChordE } from "../UI/Chords/Min7ChordE.svg";
import { ReactComponent as Min7b5ChordE } from "../UI/Chords/Min7b5ChordE.svg";
import { ReactComponent as Maj7ChordA } from "../UI/Chords/Maj7ChordA.svg";
import { ReactComponent as Dom7ChordA } from "../UI/Chords/Dom7ChordA.svg";
import { ReactComponent as Min7ChordA } from "../UI/Chords/Min7ChordA.svg";
import { ReactComponent as Min7b5ChordA } from "../UI/Chords/Min7b5ChordA.svg";

const ChordTable = styled.table`
  border-collapse: collapse;
  margin: 1rem 0;
  font-size: 0.9rem;
  width: 100%;

  th, td {
    border: 1px solid #ddd;
    padding: 6px 10px;
    text-align: center;
  }
  th {
    background: #f5f5f5;
    font-weight: 500;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    th, td {
      padding: 5px 6px;
    }
  }
`;

const ChordRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
`;

const Formula = styled.pre`
  background: #f5f5f5;
  border-radius: 6px;
  padding: 0.75rem 1rem;
  overflow-x: auto;
  font-size: 0.9rem;
  margin: 0.75rem 0;

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.5rem 0.75rem;
  }
`;

const Heimahljomar = () => {
    const { t } = useTranslation();
    const h = t.theory.heimahljomar;
    return (
        <MainContainerContentStyle>
            <h1>{h.heading}</h1>
            <p>{h.intro}</p>
            <p>{h.triad_explanation}</p>

            <h3>{h.building_heading}</h3>
            <p>{h.building_example}</p>
            <Formula>C  D  E  F  G  A  B</Formula>
            <p>{h.pick_every_other}</p>
            <Formula>{`C → E → G → B = Cmaj7 (I)\nD → F → A → C = Dm7  (II)`}</Formula>

            <h3>{h.pattern_heading}</h3>
            <p>{h.chord_types_intro}</p>
            <ChordTable>
                <thead>
                    <tr>
                        <th>{h.type_label}</th>
                        <th>{h.degrees_label}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>maj7</td><td>I, IV</td></tr>
                    <tr><td>7 (dominant)</td><td>V</td></tr>
                    <tr><td>m7</td><td>II, III, VI</td></tr>
                    <tr><td>m7♭5</td><td>VII</td></tr>
                </tbody>
            </ChordTable>

            <h3>{h.formula_heading}</h3>
            <Formula>Imaj7 – IIm7 – IIIm7 – IVmaj7 – V7 – VIm7 – VIIm7♭5</Formula>

            <h3>{h.examples_heading}</h3>
            <h4>C-dúr</h4>
            <ChordTable>
                <thead>
                    <tr><th>I</th><th>II</th><th>III</th><th>IV</th><th>V</th><th>VI</th><th>VII</th></tr>
                </thead>
                <tbody>
                    <tr><td>Cmaj7</td><td>Dm7</td><td>Em7</td><td>Fmaj7</td><td>G7</td><td>Am7</td><td>Bm7♭5</td></tr>
                </tbody>
            </ChordTable>

            <h4>G-dúr</h4>
            <ChordTable>
                <thead>
                    <tr><th>I</th><th>II</th><th>III</th><th>IV</th><th>V</th><th>VI</th><th>VII</th></tr>
                </thead>
                <tbody>
                    <tr><td>Gmaj7</td><td>Am7</td><td>Bm7</td><td>Cmaj7</td><td>D7</td><td>Em7</td><td>F#m7♭5</td></tr>
                </tbody>
            </ChordTable>

            <h3>{h.chords_heading}</h3>
            <p>{h.chords_e_root}</p>
            <ChordRow>
                <MovableChordContainer ChordDiagram={Maj7ChordE} chordName="Maj7" />
                <MovableChordContainer ChordDiagram={Dom7ChordE} chordName="7" />
                <MovableChordContainer ChordDiagram={Min7ChordE} chordName="m7" />
                <MovableChordContainer ChordDiagram={Min7b5ChordE} chordName="m7♭5" />
            </ChordRow>

            <p>{h.chords_a_root}</p>
            <ChordRow>
                <MovableChordContainer ChordDiagram={Maj7ChordA} chordName="Maj7" />
                <MovableChordContainer ChordDiagram={Dom7ChordA} chordName="7" />
                <MovableChordContainer ChordDiagram={Min7ChordA} chordName="m7" />
                <MovableChordContainer ChordDiagram={Min7b5ChordA} chordName="m7♭5" />
            </ChordRow>
        </MainContainerContentStyle>
    );
}

export default Heimahljomar;
