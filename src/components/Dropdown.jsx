import React, { useState } from "react";
import { UseTranslate } from "../context/TranslateContext";

function Dropdown() {
  const { getLang, lang } = UseTranslate();

  const handleChange = (e) => {
    getLang(e.target.value);
  };

  return (
    <select onChange={(e) => handleChange(e)} value={lang}>
      <option value="EN">EN</option>
      <option value="FR">FR</option>
      
      
    </select>
  );
}

export default Dropdown;
