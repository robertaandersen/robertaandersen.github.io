import { routes } from './RouteObjects';
import { useState } from "react";
import { NavigationMenuExpandedStyle, NavigationContainerStyle, NavigationMenuStyle } from '../UI/Navigation/NavigationStyle';
import HamburgerStyle from '../UI/Navigation/HamburgerStyle';
import { ReactComponent as Hamburger } from '../UI/Navigation/Hamburger.svg';



const Navigation = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  const NavigationStyle = isNavExpanded ? NavigationMenuExpandedStyle : NavigationMenuStyle;

  return (
    <NavigationContainerStyle>
      <HamburgerStyle onClick={() => { setIsNavExpanded(!isNavExpanded); }}>
        <Hamburger fill='rgba(0,0,0,0)' stroke='black' />
      </HamburgerStyle>
      <NavigationStyle>
        <ul>
          {routes().map((route) => <li key={route.path}><a href={route.path}>{route.title}</a></li>)}
        </ul>
      </NavigationStyle>
    </NavigationContainerStyle>
  );
}

export default Navigation;
