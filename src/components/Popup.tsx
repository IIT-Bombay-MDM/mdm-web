import React from 'react';

interface PopupProps {
    member: {
        name: string;
        role: string;
        description?: string;
        link?: string;
    };
    closePopup: () => void;
}

const Popup: React.FC<PopupProps> = ({ member, closePopup }) => {
    return (
        <div className="popup">
            <div className="popup-content">
                <h2>{member.name}</h2>
                <p>{member.role}</p>
                {member.description && <p>{member.description}</p>}
                {member.link && <p className="popup-member-link"><a href={member.link}>{member.link}</a></p>}
                <button onClick={closePopup}>Close</button>
            </div>
        </div>
    );
};

export default Popup;
