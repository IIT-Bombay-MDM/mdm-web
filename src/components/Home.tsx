import React from 'react';
import { homeData } from '../data/text.js';

const Home: React.FC = () => {
    return (
        <div className="container">
            <div className="home-text">
                {homeData.text.split('\n').map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
        </div>
    );
};

export default Home;
