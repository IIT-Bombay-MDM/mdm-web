import React, { useEffect, useState } from 'react';
import { homeData } from '../data/text.js';

interface Section {
    title: string;
    text: string;
    image?: string;
}

const Home: React.FC = () => {
    const [sections, setSections] = useState<Section[]>([]);

    useEffect(() => {
        setSections(homeData);
    }, []);

    return (
        <div className="container">
            <div className="home-text">
                {sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="section">
                        <div className="text-content">
                            <h3>{section.title}</h3>
                            {section.text.split('\n').map((line, index) => (
                                <p
                                    key={index}
                                    dangerouslySetInnerHTML={{ __html: line }}
                                />
                            ))}
                        </div>
                        {section.image && <img src={section.image} alt={section.title} className="section-image" />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
