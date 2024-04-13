import { createContext, useReducer } from "react";
import { useContext } from "react";
import dataEn from '../languages/dataEn.json'
import dataFr from '../languages/dataFr.json'
import { act } from "react-dom/test-utils";


const TranslateContext = createContext();
const initialState = {
    lang:'EN',
    dataLang:dataEn,
    show:'',
    activeCategorey:false
   
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
   case 'click':{
    const itemIndex = action.payload
    return {...state,show:itemIndex}
   }
   case 'active':{
    return {...state,activeCategorey:action.payload}
   }
   
   default:{
    throw new Error ('Action not Known')
   }
 }
}

function TranslateProvider({ children }) {

    const [{lang,dataLang,show,activeCategorey},dispatch] = useReducer(reducer,initialState)

 
    function getLang(lang){
        dispatch({type:'change',payload:lang})
    }
    function setShow(item){
      dispatch({type:'click',payload:item})
    }
    function setActivateCategory(cat){
      dispatch({type:'active',payload:cat})
    }
  
  return <TranslateContext.Provider value={{getLang,lang,dataLang,show,setShow,setActivateCategory,activeCategorey}}>{children}</TranslateContext.Provider>;
}

function UseTranslate() {
  const context = useContext(TranslateContext);

  if (context === undefined) {
    throw new Error("Action not Known");
  }

  return context;
}

export { TranslateProvider, UseTranslate };
