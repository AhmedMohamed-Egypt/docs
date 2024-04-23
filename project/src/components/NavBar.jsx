import { NavLink, Link, useNavigate } from "react-router-dom";
import { UseTranslate } from "../context/TranslateContext";
import { Fragment, useState } from "react";
import SubList from "../hooks/SubList";

function NavBar() {
  const { dataLang } = UseTranslate();

  const allList = Object.keys(dataLang.maindocs).map((key) => {
    return { ...dataLang.maindocs[key][0] };
  });

  const allSubTitlesNav = allList.map((item) => item.subTitlesNav);

  const [close,setClose] = useState(false)
  if(close){
    document.body.classList.add('close')
  }else {
    document.body.classList.remove('close')
  }

  return (
    <nav className="mrGain-navBar">
      <button className="btn closeNav" onClick={()=>setClose(close=>!close)}>
      <i className="bi bi-arrow-left-short"></i>
      </button>
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
