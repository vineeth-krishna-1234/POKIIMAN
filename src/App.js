import React from 'react';
import './App.css';
import {useState,useEffect} from 'react';
import ListDisplay from './comps/list';
import Header_nav from './comps/header';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Particular_poke from './comps/display';



function App() {
  return (
    <div>
    <BrowserRouter >
    <Routes>
      <Route exact path="/home"  element={<div><Header_nav /><ListDisplay /></div>}/>
      <Route path="/details/:poke" element={<Particular_poke />}></Route>
    </Routes>
    </BrowserRouter>
    </div>

  );
}
export default App;
