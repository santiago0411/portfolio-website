import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home'
import {LangProvider} from "./components/LangProvider";


function App() {
    return (
        <Router>
            <LangProvider>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                </Routes>
            </LangProvider>
        </Router>
    );
}

export default App;
