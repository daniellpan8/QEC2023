import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'

import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar'
import GptApi from './PreScreen';

function App() {
    return (
        <div className='h-screen w-screen bg-gray-200 mb-10'>
            <div className='h-max bg-gray-200'>
                <Navbar />
                <div>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/prescreen' element={<GptApi />} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </div>
    );
}

export default App;
