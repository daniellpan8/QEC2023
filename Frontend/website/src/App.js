import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'

import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar'
import GptApi from './GptApi';

function App() {
    return (
        <div className='h-screen w-screen bg-gray-200'>
            <Navbar />
            <div className='h-full'>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/askgpt' element={<GptApi />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
