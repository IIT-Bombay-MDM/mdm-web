import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/images/iitb.png';

const Header: React.FC = () => {
    return (
        <header>
            <div className="header-content">
                <div className="header-left">
                    <Link to="/"><img src={logo} alt="IITB Logo" className="header-logo" /></Link>
                    <Link to="/"><h2>IIT Bombay</h2></Link>
                </div>
                <Link to="/"><h1 className="header-center">Maharashtra Drone Mission</h1></Link>
                <nav className="header-right">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/team">Team</a></li>
                        <li><a href="/projects">Projects</a></li>
                    </ul>
                </nav>
            </div>
        </header >
    );
};

export default Header;
