import { useState } from "react";
import styled from "styled-components";
import { MainContainerStyle } from "../UI/MainContainer/MainContainerStyle";
import Chords from "../Chords/Chords";
import Heimahljomar from "../Theory/Heimahljomar";
import { useTranslation } from "../i18n/LanguageContext";
import useDocumentTitle from "../hooks/useDocumentTitle";

const TabBar = styled.div`
  display: flex;
  gap: 0;
  border-bottom: 2px solid #e5e5e5;
  margin-bottom: 1rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;

  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`;

const Tab = styled.button<{ $active: boolean }>`
  background: none;
  border: none;
  border-bottom: 2px solid ${({ $active }) => ($active ? "#1a1a1a" : "transparent")};
  margin-bottom: -2px;
  padding: 10px 20px;
  cursor: pointer;
  font: inherit;
  font-size: 1rem;
  font-weight: ${({ $active }) => ($active ? "500" : "400")};
  color: ${({ $active }) => ($active ? "#1a1a1a" : "#666")};
  transition: color 0.15s, border-color 0.15s;

  &:hover {
    color: #1a1a1a;
  }
`;

type MaterialsTab = "chords" | "heimahljomar";

const Materials = () => {
  const [tab, setTab] = useState<MaterialsTab>("chords");
  const { t } = useTranslation();
  useDocumentTitle(t.materials.title);

  return (
    <MainContainerStyle>
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
