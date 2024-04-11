import Layout from "../components/Layout"
import { UseTranslate } from "../context/TranslateContext"
function RoadMap() {
    const {dataLang} = UseTranslate()
    return (

        <Layout>
        {dataLang.maindocs.roadmap.map((item,index)=>
      <div className="content-text" key={index}>
      <h2 className="drkTxt mrb-10 size-30">{item.title}</h2>
      <p className="drkTxt mrb-25 size-20">{item.desc}</p>
      <p className="drkTxt mrb-25 size-20">
        {item.firstText}
      </p>
      <p className="drkTxt mrb-25 size-20">
      {item.secondText}
      </p>
      <span className="drkTxt ">
         {item.lastUpdate}
      </span>
    </div>
    )}
      </Layout>
    )
}

export default RoadMap
