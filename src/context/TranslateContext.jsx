import { createContext, useReducer } from "react";
import { useContext } from "react";
import dataEn from '../languages/dataEn.json'
import dataFr from '../languages/dataFr.json'


const TranslateContext = createContext();
const initialState = {
    lang:'EN',
    dataLang:dataEn
}
function getDataLanguages (stateLang){
   switch (stateLang){
     case 'EN':{
    return dataEn
     }
     case 'FR':{
        return dataFr
     }
  
   }
}

function reducer(state,action){
  
 switch(action.type){
   case 'change':{
    const getData = getDataLanguages(action.payload)
    return {...state,lang:action.payload,dataLang:getData}
   }
   default:{
    throw new Error ('Action not Known')
   }
 }
}

function TranslateProvider({ children }) {

    const [{lang,dataLang},dispatch] = useReducer(reducer,initialState)

 
    function getLang(lang){
        dispatch({type:'change',payload:lang})
    }
  return <TranslateContext.Provider value={{getLang,lang,dataLang}}>{children}</TranslateContext.Provider>;
}

function UseTranslate() {
  const context = useContext(TranslateContext);

  if (context === undefined) {
    throw new Error("Action not Known");
  }

  return context;
}

export { TranslateProvider, UseTranslate };
