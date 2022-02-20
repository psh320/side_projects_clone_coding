import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import Footer from "./Footer";
import SearchHouse from "./search/SearchHouse";
import Main from "./main/Main";
import HouseDetail from "./rooms/HouseDetail";
import './App.css';


const App = () => {
    return ( 
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={ Main }/>
                    <Route path="/s" exact component={ SearchHouse } />
                    <Route path="/rooms" exact component={ HouseDetail } />
                </div>
            </BrowserRouter>
            <Footer />
        </div>
        
    );
};

export default App;