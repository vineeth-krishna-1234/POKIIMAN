import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingPage/landingPage";
import PokeList from "../pages/pokeListPage/pokeList";
import PokeStats from "../pages/pokeStatsPage/pokeStats";

function RoutesConfig() {
  return (
    <div className="bg-black">
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="pokes" element={<PokeList />} />
        <Route path="poke" element={<PokeStats />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default RoutesConfig;
