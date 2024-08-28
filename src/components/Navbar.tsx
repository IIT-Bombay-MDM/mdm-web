import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/projects">Projects</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
