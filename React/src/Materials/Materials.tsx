import { useState } from "react";
import styled from "styled-components";
import { MainContainerStyle } from "../UI/MainContainer/MainContainerStyle";
import Chords from "../Chords/Chords";
import Heimahljomar from "../Theory/Heimahljomar";
import { useTranslation } from "../i18n/LanguageContext";

const TabBar = styled.div`
  display: flex;
  gap: 0;
  border-bottom: 2px solid #ccc;
  margin-bottom: 1rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 480px) {
    margin-left: 15px;
    margin-right: 15px;
  }
`;

const Tab = styled.button<{ $active: boolean }>`
  background: none;
  border: none;
  border-bottom: 2px solid ${({ $active }) => ($active ? "#333" : "transparent")};
  margin-bottom: -2px;
  padding: 8px 16px;
  cursor: pointer;
  font: inherit;
  font-weight: ${({ $active }) => ($active ? "500" : "400")};
  color: ${({ $active }) => ($active ? "#000" : "#666")};

  &:hover {
    color: #000;
  }
`;

type MaterialsTab = "chords" | "heimahljomar";

const Materials = () => {
  const [tab, setTab] = useState<MaterialsTab>("chords");
  const { t } = useTranslation();

  return (
    <MainContainerStyle>
      <title>{t.materials.title}</title>
      <TabBar>
        <Tab $active={tab === "chords"} onClick={() => setTab("chords")}>
          {t.materials.tabs.chords}
        </Tab>
        <Tab $active={tab === "heimahljomar"} onClick={() => setTab("heimahljomar")}>
          {t.materials.tabs.heimahljomar}
        </Tab>
      </TabBar>
      {tab === "chords" && <Chords />}
      {tab === "heimahljomar" && <Heimahljomar />}
    </MainContainerStyle>
  );
};

export default Materials;
