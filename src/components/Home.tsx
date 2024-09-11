import React, { useEffect, useState } from 'react';
import { homeData } from '../data/text.js';

interface Section {
    title: string;
    text: string;
}

const Home: React.FC = () => {
    const [sections, setSections] = useState<Section[]>([]);

    useEffect(() => {
        setSections(homeData)
    }, []);

    return (
        <div className="container">
            <div className="home-text">
                {sections.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                        <h3>{section.title}</h3>
                        {section.text.split('\n').map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
