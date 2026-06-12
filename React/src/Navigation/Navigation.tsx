import { useState } from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { NavigationMenuExpandedStyle, NavigationContainerStyle, NavigationMenuStyle, LanguageToggleStyle } from '../UI/Navigation/NavigationStyle';
import HamburgerStyle from '../UI/Navigation/HamburgerStyle';
import { ReactComponent as Hamburger } from '../UI/Navigation/Hamburger.svg';
import Landing from '../Landing/Landing';
import Courses from '../Courses/Courses';
import Catalog from '../Catalog/Catalog';
import About from '../About/About';
import Materials from '../Materials/Materials';
import Book from '../Book/Book';
import { useTranslation } from '../i18n/LanguageContext';

const navItems = [
  { path: '/', key: 'landing' },
  { path: '/boka', key: 'book' },
  { path: '/namskeid', key: 'courses' },
  { path: '/verd', key: 'catalog' },
  { path: '/um', key: 'about' },
  { path: '/namsefni', key: 'materials' },
] as const;

type NavKey = typeof navItems[number]['key'];

const Navigation = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const { lang, setLang, t } = useTranslation();

  const NavigationStyle = isNavExpanded ? NavigationMenuExpandedStyle : NavigationMenuStyle;

  return (
    <>
      <NavigationContainerStyle>
        <HamburgerStyle
          onClick={() => setIsNavExpanded(!isNavExpanded)}
          aria-label="Menu"
        >
          <Hamburger fill='rgba(0,0,0,0)' stroke='black' />
        </HamburgerStyle>
        <NavigationStyle>
          <ul>
            {navItems.map(({ path, key }) => (
              <li key={key}>
                <NavLink
                  to={path}
                  end={path === '/'}
                  onClick={() => setIsNavExpanded(false)}
                >
                  {t.nav[key as NavKey]}
                </NavLink>
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
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/boka" element={<Book />} />
        <Route path="/namskeid" element={<Courses />} />
        <Route path="/verd" element={<Catalog />} />
        <Route path="/um" element={<About />} />
        <Route path="/namsefni" element={<Materials />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default Navigation;
