import { UseTranslate } from "../context/TranslateContext";
import { NavLink, useNavigate } from "react-router-dom";

function SubList({ indexItem, subList, mainItem }) {
  const { show, setShow, setActivateCategory } = UseTranslate();
  const Navigate = useNavigate();
  return (
    <div>
      <p
        onClick={() => {
          {
            setShow(show === indexItem ? "" : indexItem);
            Navigate(`${mainItem.path}`);
            setActivateCategory(false);
          }
        }}
      >
        <span  className={`mainLink ${show === indexItem ? 'active' : ''}`}>
          {mainItem.titleNavBar}
        </span>

        <i
          className={`${
            show === indexItem ? "rotate" : ""
          } chevronDown bi bi-chevron-right`}
        ></i>
      </p>
      {show === indexItem && (
        <ul className="mtop-15">
          {subList.map((itemSub, index) => {
            return (
              <li className="mrb-15" key={index}>
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
  );
}

export default SubList;
