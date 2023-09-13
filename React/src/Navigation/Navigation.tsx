import { routes } from './RouteObjects';
import { useState } from "react";
import { NavigationMenuExpandedStyle, NavigationContainerStyle, NavigationMenuStyle } from '../UI/Navigation/NavigationStyle';
import HamburgerStyle from '../UI/Navigation/HamburgerStyle';
import { ReactComponent as Hamburger } from '../UI/Navigation/Hamburger.svg';
import styled from 'styled-components';
import React from 'react';
import { MainContainerContentStyle } from '../UI/MainContainer/MainContainerStyle';
import Landing from '../Landing/Landing';
import Courses from '../Courses/Courses';
import Catalog from '../Catalog/Catalog';
import About from '../About/About';
import Chords from '../Chords/Chords';
import Book from '../Book/Book';



const Navigation = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  const NavigationStyle = isNavExpanded ? NavigationMenuExpandedStyle : NavigationMenuStyle;
  const HiddenContentStyle = styled(MainContainerContentStyle)`
    display: none;
  `

  const [isLandingDivClicked, setIsLandingDivClicked] = useState(true)
  const LandingDiv = isLandingDivClicked ? MainContainerContentStyle : HiddenContentStyle;

  const [isBookDivClicked, setIsBookDivClicked] = useState(false)
  const BookDiv = isBookDivClicked ? MainContainerContentStyle : HiddenContentStyle;

  const [isCoursesDivClicked, setIsCoursesDivClicked] = useState(false)
  const CoursesDiv = isCoursesDivClicked ? MainContainerContentStyle : HiddenContentStyle;

  const [isCatalogDivClicked, setIsCatalogDivClicked] = useState(false)
  const CatalogDiv = isCatalogDivClicked ? MainContainerContentStyle : HiddenContentStyle;

  const [isAboutDivClicked, setIsAboutDivClicked] = useState(false)
  const AboutDiv = isAboutDivClicked ? MainContainerContentStyle : HiddenContentStyle;

  const [isChordsDivClicked, setIsChordsDivClicked] = useState(false)
  const ChordsDiv = isChordsDivClicked ? MainContainerContentStyle : HiddenContentStyle;



  function clearAll() {
    setIsLandingDivClicked(false);
    setIsBookDivClicked(false);
    setIsCoursesDivClicked(false);
    setIsCatalogDivClicked(false);
    setIsAboutDivClicked(false);
    setIsChordsDivClicked(false);
  }

  return (
    <>
      <NavigationContainerStyle>
        <HamburgerStyle onClick={() => { setIsNavExpanded(!isNavExpanded); }}>
          <Hamburger fill='rgba(0,0,0,0)' stroke='black' />
        </HamburgerStyle>
        <NavigationStyle>
          <ul>
            <li key='Landing' onClick={() => {
              clearAll();
              setIsLandingDivClicked(true);
            }}
            ><a href='#'>Velkomin</a></li>
            <li key='Book' onClick={() => {
              clearAll();
              setIsBookDivClicked(true);
            }}
            ><a href='#'>Bóka Tíma</a></li>
            <li key='Courses' onClick={() => {
              clearAll();
              setIsCoursesDivClicked(true);
            }}
            ><a href='#'>Uppbygging Námsins</a></li>
            <li key='Catalog' onClick={() => {
              clearAll();
              setIsCatalogDivClicked(true);
            }}
            ><a href='#'>Verð</a></li>
            <li key='About' onClick={() => {
              clearAll();
              setIsAboutDivClicked(true);
            }}
            ><a href='#'>Um Mig</a></li>
            <li key='Chords' onClick={() => {
              clearAll();
              setIsChordsDivClicked(true);
            }}
            ><a href='#'>Gítargrip</a></li>

          </ul>
        </NavigationStyle>
      </NavigationContainerStyle >
      {
        <>
          <LandingDiv><Landing /></LandingDiv>
          <BookDiv><Book /></BookDiv>
          <CoursesDiv><Courses /></CoursesDiv>
          <CatalogDiv><Catalog /></CatalogDiv>
          <AboutDiv><About /></AboutDiv>
          <ChordsDiv><Chords /></ChordsDiv>
        </>
      };
    </>
  );
}

export default Navigation;
