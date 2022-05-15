import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import Navbar from "./components/Navbar";
import Home from './components/pages/HomePage/Home'
import LangContext from "./components/LangProvider";
import {Footer} from "./components/pages/Footer/Footer";


function App() {
    const { currentLangData } = useContext(LangContext);
    return (
        <>
            <Router>
                <Navbar {...currentLangData.NavBar}/>
                <Routes>
                    <Route path='/' element={<Home {...currentLangData}/>}/>
                </Routes>
                <Footer {...currentLangData.Footer}/>
            </Router>
        </>
    );
}

export default App;
