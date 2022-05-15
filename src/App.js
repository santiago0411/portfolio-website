import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import Navbar from "./components/Navbar";
import Home from './components/pages/HomePage/Home'
import About from "./components/pages/About/About";
import LangContext from "./components/LangProvider";
import { Footer } from "./components/pages/Footer/Footer";


function App() {
    const { currentLangData } = useContext(LangContext);
    return (
        <>
            <Router>
                <Navbar {...currentLangData.NavBar}/>
                <Routes>
                    <Route path='/' element={<Home {...currentLangData.Home}/>}/>
                    <Route path='/about' element={<About {...currentLangData.About}/>}/>
                </Routes>
                <Footer {...currentLangData.Footer}/>
            </Router>
        </>
    );
}

export default App;
