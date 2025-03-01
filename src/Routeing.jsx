import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact'
import User from './pages/User'
import Food from './pages/Food'
import NotFound from './pages/NotFound'
const Routeing = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/user' element={<User />} />
                    <Route path='*' element={<NotFound />} />
                    <Route path='/foods' element={<Food />} />
                    
                </Routes>
            </Router>
        </div>
    )
}

export default Routeing;
