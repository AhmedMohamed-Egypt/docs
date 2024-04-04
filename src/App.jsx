import { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Intro from "./pages/Intro";
import HomePage from "./pages/HomePage";
import Token from './pages/Token'
import Sponsors from './pages/Sponsors'
import RoadMap from './pages/RoadMap'
import Marketing from "./pages/Marketing";
import Lottery from "./pages/Lottery";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
