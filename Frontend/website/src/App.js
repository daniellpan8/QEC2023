import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css'

import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar'
import GptApi from './GptApi';


function App() {
  return (
      <div className="App">
        <Navbar/>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/askgpt' element={<GptApi/>} />
            </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
