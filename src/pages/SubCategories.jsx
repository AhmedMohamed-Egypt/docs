import Layout from "../components/Layout"
import { UseTranslate } from "../context/TranslateContext"
function SubCategories() {
    const {dataLang} = UseTranslate()
    return (
 <>
     {dataLang.maindocs.roadmap.map((item)=>
       <p>{item.subCategoery}</p>
    )}
 </>
    )
}

export default SubCategories
