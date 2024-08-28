import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/images/iitb.png';

const Header: React.FC = () => {
    return (
        <header>
            <div className="header-content">
                <Link to="/"><img src={logo} alt="IITB Logo" className="header-logo" /></Link>
                <Link to="/">
                    <div className="header-text">
                        <h1>IIT Bombay</h1>
                        <p>Maharashtra Drone Mission</p>
                    </div>
                </Link>
            </div>
        </header>
    );
};

export default Header;
