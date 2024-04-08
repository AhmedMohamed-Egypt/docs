import { NavLink, Link } from "react-router-dom";
import { UseTranslate } from "../context/TranslateContext";

function NavBar() {
  const { dataLang } = UseTranslate();

  return (
    <nav className="mrGain-navBar">
      {dataLang.nav.map((item,index) => (
        <NavLink key={index} to={item.path}>{item.value}</NavLink>
      ))}
    </nav>
  );
}

export default NavBar;
