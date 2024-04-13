import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Intro from "./pages/Intro";

import Token from "./pages/Token";
import Sponsors from "./pages/Sponsors";

import Marketing from "./pages/Marketing";
import Lottery from "./pages/Lottery";
import RoadMapIndex from "./pages/roadmap/RoadMapIndex";
import { TranslateProvider } from "./context/TranslateContext";

import RoadMapCatOne from "./pages/roadmap/RoadMapCatOne";
import RoadMapCatTwo from "./pages/roadmap/RoadMapCatTwo";

function App() {
  return (
    <BrowserRouter>
      <TranslateProvider>
        <Routes>
          <Route index path="/" element={<Intro />} />
          <Route path="/Token" element={<Token />} />
          <Route path="/Lottery" element={<Lottery />} />
          <Route path="/Sponsors" element={<Sponsors />} />
          <Route path="RoadMap" element={<RoadMapIndex />}>
            <Route path="ChapterOne" element={<RoadMapCatOne />} />
            <Route path="ChapterTwo" element={<RoadMapCatTwo />} />
          </Route>
          <Route path="Marketing" element={<Marketing />} />
        </Routes>
      </TranslateProvider>
    </BrowserRouter>
  );
}

export default App;
