import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import './Header.css';
const Header = () => {

    return(
        <div>
            <div className="header">
                <div className="header-box">
                    <div className="header-text">
                        <h1>Animal Crossing Helper</h1>
                    </div>
                    <div className="login-button">
                        <GoogleAuth />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header