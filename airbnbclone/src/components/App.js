import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from "./Footer";
import SearchHouse from "./search/SearchHouse";
import Main from "./main/Main";
import HouseDetail from "./rooms/HouseDetail";
import './App.css';


const App = () => {
    return ( 
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={ <Main/> }/>
                    <Route path="/s/*" element={ <SearchHouse /> } />
                    <Route path="/rooms/*" element={ <HouseDetail/> } />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
        
    );
};

export default App;