import { NavLink, Link, useNavigate } from "react-router-dom";
import { UseTranslate } from "../context/TranslateContext";
import { Fragment } from "react";

function NavBar() {
  const { dataLang, show, setShow, setActivateCategory } = UseTranslate();

  const allList = Object.keys(dataLang.maindocs).map((key) => {
    return { ...dataLang.maindocs[key][0] };
  });

  const Navigate = useNavigate();
  const { subTitlesNav } = { ...dataLang.maindocs.roadmap }[0];

  return (
    <nav className="mrGain-navBar">
      {allList.map((item, index) => (
        <Fragment key={index}>
          {index === 4 ? (
            <div>
              <p
                onClick={() => {
                  {
                    setShow(show === index ? "" : index);
                    Navigate(`${item.path}`);
                    setActivateCategory(false);
                  }
                }}
              >
                <span className="mainLink">{item.titleNavBar}</span>
                <i
                  className={`${
                    show === index ? "rotate" : ""
                  } chevronDown bi bi-chevron-right`}
                ></i>
              </p>
              {show === index && (
                <ul className="mtop-15">
                  {subTitlesNav.map((itemSub) => {
                    return (
                      <li className="mrb-15">
                        <NavLink
                          onClick={() => setActivateCategory(true)}
                          to={`${itemSub.path}`}
                        >
                          {itemSub.title}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
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
