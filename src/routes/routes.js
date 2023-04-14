import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingPage/landingPage";
import PokeList from "../pages/pokeListPage/pokeList";

function RoutesConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="poke" element={<PokeList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesConfig;
