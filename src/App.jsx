import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Intro from "./pages/Intro";

import Token from "./pages/Token";
import Sponsors from "./pages/Sponsors";
import RoadMap from "./pages/RoadMap";
import Marketing from "./pages/Marketing";
import Lottery from "./pages/Lottery";
import { TranslateProvider } from "./context/TranslateContext";

function App() {
  return (
    <TranslateProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="Token" element={<Token />} />
          <Route path="Lottery" element={<Lottery />} />
          <Route path="Sponsors" element={<Sponsors />} />
          <Route path="RoadMap" element={<RoadMap />} />
          <Route path="Marketing" element={<Marketing />} />
        </Routes>
      </BrowserRouter>
    </TranslateProvider>
  );
}

export default App;
