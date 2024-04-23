
import Layout from "../../components/Layout";
import { UseTranslate } from "../../context/TranslateContext";

function Intro() {
  const {dataLang}= UseTranslate()
 
  return (
    <Layout>
      {dataLang.maindocs.intro.map((item)=>
    
    <div className="content-text" key={item.id}>
    <h2 className="drkTxt mrb-10 size-30">{item.title}</h2>
    <p className="drkTxt mrb-25 size-20">{item.desc}</p>
    <p className="drkTxt mrb-25 size-20">
      {item.firstText}
    </p>
    <p className="drkTxt mrb-25 size-20">
      {item.secondText}
    </p>
    {/*<img className="responsive-img" src={`${item.ImageOne}`}/>*/}
    <div className="videoYoutbe">
    <iframe width="420" height="315"
src={`${item.youtubeVideo}`}>
</iframe>
    </div>
    <span className="drkTxt ">
        {item.lastUpdate}
    </span>
  </div>
    
    )}
     
    </Layout>
  );
}

export default Intro;
