import React from "react";
import './index.css';
// eslint-disable-next-line
import {Navigate, Route, Routes} from "react-router-dom";
import UoT from "./routes/UoT";
import UoTAdmin from "./routes/UoTAdmin";
import Home from "./routes/Home";
import PageNotFound from "./routes/PageNotFound";
import Navbar from "./components/Home/Navbar";
import UoTAddOrEditCategory from "./components/UoTAdmin/UoTAddOrEditCategory";

const App = () => {
    return (
        <div className="container">
            <Navbar/>
            <Routes>
                {/*<Route path="/" element={<Navigate to="prz"/>}/>*/}
                <Route path="/" element={<Home/>}/>
                <Route path="/uot" element={<UoT/>}/>
                <Route path="/prz" element={<Navigate to="/uot"/>}/>
                <Route path="/uot/admin" element={<UoTAdmin/>}/>
                <Route path="/uot/admin/add-category" element={<UoTAddOrEditCategory/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </div>
    );
}

export default App;