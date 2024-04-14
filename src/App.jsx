import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Intro from "./pages/intro/Intro";

import Token from "./pages/token/Token";
import Sponsors from "./pages/sponsors/Sponsors";

import Marketing from "./pages/marketing/Marketing";
import Lottery from "./pages/lottery/Lottery";
import RoadMapIndex from "./pages/roadmap/RoadMapIndex";
import { TranslateProvider } from "./context/TranslateContext";

import RoadMapCatOne from "./pages/roadmap/RoadMapCatOne";
import RoadMapCatTwo from "./pages/roadmap/RoadMapCatTwo";
import TokenOne from "./pages/token/TokenOne";

function App() {
  return (
    <BrowserRouter>
      <TranslateProvider>
        <Routes>
          <Route index path="/" element={<Intro />} />
          <Route path="Token" element={<Token />} >
            <Route path="tokenOne" element={<TokenOne/>}/>
          </Route>
          <Route path="Lottery" element={<Lottery />} />
          <Route path="Sponsors" element={<Sponsors />} />
          <Route path="RoadMap" element={<RoadMapIndex />}>
            <Route path="roadMapOne" element={<RoadMapCatOne />} />
            <Route path="roadMapTwo" element={<RoadMapCatTwo />} />
          </Route>
          <Route path="Marketing" element={<Marketing />} />
        </Routes>
      </TranslateProvider>
    </BrowserRouter>
  );
}

export default App;
