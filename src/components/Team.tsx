import React, { useState, useEffect } from 'react';
import Popup from './Popup';
import teamData from '../data/team.json'

interface TeamMember {
    name: string;
    role: string;
    description: string;
    image: string;  // Path to the image file
}


const Team: React.FC = () => {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

    useEffect(() => {
        setTeamMembers(teamData)
    }, []);

    const repeatedTeamMembers: TeamMember[] = Array(10).fill(teamMembers).flat();

    const handleMemberClick = (member: TeamMember) => {
        setSelectedMember(member);
    };

    const closePopup = () => {
        setSelectedMember(null);
    };

    return (
        <div className="container">
            <h2 className="team-header">Meet Our Team</h2>
            <div className="grid">
                {/* todo: remove repeated members */}
                {repeatedTeamMembers.map((member) => (
                    <div
                        key={member.name}
                        className="grid-item"
                        onClick={() => handleMemberClick(member)}
                    >
                        <img src={process.env.PUBLIC_URL + member.image} alt={member.name} />
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
