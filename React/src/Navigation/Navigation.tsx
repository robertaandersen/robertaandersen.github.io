import { useState } from "react";
import { NavigationMenuExpandedStyle, NavigationContainerStyle, NavigationMenuStyle, LanguageToggleStyle } from '../UI/Navigation/NavigationStyle';
import HamburgerStyle from '../UI/Navigation/HamburgerStyle';
import { ReactComponent as Hamburger } from '../UI/Navigation/Hamburger.svg';
import { MainContainerContentStyle } from '../UI/MainContainer/MainContainerStyle';
import Landing from '../Landing/Landing';
import Courses from '../Courses/Courses';
import Catalog from '../Catalog/Catalog';
import About from '../About/About';
import Chords from '../Chords/Chords';
import Book from '../Book/Book';
import { useTranslation } from '../i18n/LanguageContext';

const pageComponents: Record<string, JSX.Element> = {
  Landing: <Landing />,
  Book: <Book />,
  Courses: <Courses />,
  Catalog: <Catalog />,
  About: <About />,
  Chords: <Chords />,
};

const pageKeys = ['Landing', 'Book', 'Courses', 'Catalog', 'About', 'Chords'] as const;
type NavKey = 'landing' | 'book' | 'courses' | 'catalog' | 'about' | 'chords';

const Navigation = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [activePage, setActivePage] = useState('Landing');
  const { lang, setLang, t } = useTranslation();

  const NavigationStyle = isNavExpanded ? NavigationMenuExpandedStyle : NavigationMenuStyle;

  return (
    <>
      <NavigationContainerStyle>
        <HamburgerStyle onClick={() => setIsNavExpanded(!isNavExpanded)}>
          <Hamburger fill='rgba(0,0,0,0)' stroke='black' />
        </HamburgerStyle>
        <NavigationStyle>
          <ul>
            {pageKeys.map((key) => (
              <li key={key}>
                <button onClick={() => setActivePage(key)}>
                  {t.nav[key.toLowerCase() as NavKey]}
                </button>
              </li>
            ))}
          </ul>
        </NavigationStyle>
        <LanguageToggleStyle>
          <button
            onClick={() => setLang(lang === 'is' ? 'en' : 'is')}
            aria-label={lang === 'is' ? 'Switch to English' : 'Skipta yfir á íslensku'}
          >
            {lang === 'is' ? 'EN' : 'IS'}
          </button>
        </LanguageToggleStyle>
      </NavigationContainerStyle>
      <MainContainerContentStyle>
        {pageComponents[activePage]}
      </MainContainerContentStyle>
    </>
  );
};

export default Navigation;
