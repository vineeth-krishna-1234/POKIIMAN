import React from 'react';
import './App.css';
import ListDisplay from './comps/list';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Particular_poke from './comps/display';
import QuizApp from './comps/quiz';



function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<ListDisplay />}/>
        <Route path="/details/:poke" element={<Particular_poke />}/>
        <Route path='/quiz' element={<QuizApp />} />
      </Routes>
      </BrowserRouter>
      
    </div>

  );
}
export default App;
