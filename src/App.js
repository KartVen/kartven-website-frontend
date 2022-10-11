import './App.css';
import {useEffect} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {

    useEffect(() => {
        document.title = 'KartVen';
    }, []);

    return (
        <div className="app">
            <Header/>
            <main>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>

                    <Route path={'*'} element={<Navigate to={'/'}/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
