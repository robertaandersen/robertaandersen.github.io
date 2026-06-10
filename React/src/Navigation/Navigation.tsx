import { useState } from "react";
import { NavigationMenuExpandedStyle, NavigationContainerStyle, NavigationMenuStyle } from '../UI/Navigation/NavigationStyle';
import HamburgerStyle from '../UI/Navigation/HamburgerStyle';
import { ReactComponent as Hamburger } from '../UI/Navigation/Hamburger.svg';
import { MainContainerContentStyle } from '../UI/MainContainer/MainContainerStyle';
import Landing from '../Landing/Landing';
import Courses from '../Courses/Courses';
import Catalog from '../Catalog/Catalog';
import About from '../About/About';
import Chords from '../Chords/Chords';
import Book from '../Book/Book';

const pages = [
  { key: 'Landing', title: 'Velkomin', component: <Landing /> },
  { key: 'Book', title: 'Bóka Tíma', component: <Book /> },
  { key: 'Courses', title: 'Uppbygging Námsins', component: <Courses /> },
  { key: 'Catalog', title: 'Verð', component: <Catalog /> },
  { key: 'About', title: 'Um Mig', component: <About /> },
  { key: 'Chords', title: 'Gítargrip', component: <Chords /> },
];

const Navigation = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [activePage, setActivePage] = useState('Landing');

  const NavigationStyle = isNavExpanded ? NavigationMenuExpandedStyle : NavigationMenuStyle;

  return (
    <>
      <NavigationContainerStyle>
        <HamburgerStyle onClick={() => setIsNavExpanded(!isNavExpanded)}>
          <Hamburger fill='rgba(0,0,0,0)' stroke='black' />
        </HamburgerStyle>
        <NavigationStyle>
          <ul>
            {pages.map(({ key, title }) => (
              <li key={key} onClick={() => setActivePage(key)}>
                <a href='#'>{title}</a>
              </li>
            ))}
          </ul>
        </NavigationStyle>
      </NavigationContainerStyle>
      <MainContainerContentStyle>
        {pages.find(p => p.key === activePage)?.component}
      </MainContainerContentStyle>
    </>
  );
};

export default Navigation;
