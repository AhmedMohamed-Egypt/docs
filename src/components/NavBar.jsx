import { NavLink, Link, useNavigate } from "react-router-dom";
import { UseTranslate } from "../context/TranslateContext";
import { Fragment } from "react";
import SubList from "../hooks/SubList";

function NavBar() {
  const { dataLang, setShow } = UseTranslate();

  const allList = Object.keys(dataLang.maindocs).map((key) => {
    return { ...dataLang.maindocs[key][0] };
  });

  
  const { subTitlesNav:subListRoadMap } = { ...dataLang.maindocs.roadmap }[0];

  return (
    <nav className="mrGain-navBar">
      {allList.map((item, index) => (
        <Fragment key={index}>
          {index === 4 ? (
            <SubList indexItem={index} subList={subListRoadMap} mainItem={item}/>
          ) : (
            <NavLink onClick={() => setShow(index)} to={item.path}>
              {item.titleNavBar}
            </NavLink>
          )}
        </Fragment>
      ))}
    </nav>
  );
}

export default NavBar;
