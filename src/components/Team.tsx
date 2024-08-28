import React, { useState } from 'react';
import Popup from './Popup';

// Import images for the team members
import placeholder from '../assets/images/person_placeholder.jpg';

interface TeamMember {
    name: string;
    role: string;
    description: string;
    image: string;  // Path to the image file
}

const teamMembers: TeamMember[] = [
    {
        name: 'John Doe',
        role: 'Developer',
        description: 'John is a senior developer with over 10 years of experience in full-stack development.',
        image: placeholder,
    },
    {
        name: 'Jane Smith',
        role: 'Designer',
        description: 'Jane is a creative designer with a passion for user-centered design and digital art.',
        image: placeholder,
    },
];
const repeatedTeamMembers: TeamMember[] = Array(10).fill(teamMembers).flat();

const Team: React.FC = () => {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

    const handleMemberClick = (member: TeamMember) => {
        setSelectedMember(member);
    };

    const closePopup = () => {
        setSelectedMember(null);
    };

    return (
        <div className="container">
            <h2 className="team-header">Meet Our Team</h2>
            {/* <div className="grid-container"> */}
            <div className="grid">
                {/* todo: remove repeated members */}
                {repeatedTeamMembers.map((member) => (
                    <div
                        key={member.name}
                        className="grid-item"
                        onClick={() => handleMemberClick(member)}
                    >
                        <img src={member.image} alt={member.name} />
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                    </div>
                ))}
            </div>
            {selectedMember && <Popup member={selectedMember} closePopup={closePopup} />}
        </div>
    );
};

export default Team;
