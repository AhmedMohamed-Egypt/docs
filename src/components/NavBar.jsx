import { NavLink, Link, useNavigate } from "react-router-dom";
import { UseTranslate } from "../context/TranslateContext";
import { Fragment } from "react";
import SubList from "../hooks/SubList";

function NavBar() {
  const { dataLang, setShow } = UseTranslate();

  const allList = Object.keys(dataLang.maindocs).map((key) => {
    return { ...dataLang.maindocs[key][0] };
  });

  const allSubTitlesNav = allList.map((item) => item.subTitlesNav);

  return (
    <nav className="mrGain-navBar">
      {allList.map((item, index) => (
        <Fragment key={index}>
          {
            <SubList
              indexItem={index}
              subList={allSubTitlesNav[index]}
              mainItem={item}
            />
          }
        </Fragment>
      ))}
    </nav>
  );
}

export default NavBar;
