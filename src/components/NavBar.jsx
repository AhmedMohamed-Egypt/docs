import { NavLink, Link } from "react-router-dom";
import { UseTranslate } from "../context/TranslateContext";

function NavBar() {
  const { dataLang } = UseTranslate();
  const allList = Object.keys(dataLang.maindocs).map((key) => {
    return {...dataLang.maindocs[key][0]}
  })
  

  return (
    <nav className="mrGain-navBar">
      {allList.map((item,index) => (
        <NavLink key={index} to={item.path}>{item.titleNavBar}</NavLink>
      ))}
    </nav>
  )
}

export default NavBar;

