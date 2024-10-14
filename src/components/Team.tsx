import React, { useState, useEffect } from 'react';
import Popup from './Popup';
import teamData from '../data/team.json'

interface TeamMember {
    name: string;
    role: string;
    description: string;
    image: string;
    level: number;
}

const Team: React.FC = () => {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

    useEffect(() => {
        setTeamMembers(teamData)
    }, []);

    const groupByLevel = (members: TeamMember[]) => {
        const grouped: { [key: number]: TeamMember[] } = {};
        members.forEach((member) => {
            if (!grouped[member.level]) {
                grouped[member.level] = [];
            }
            grouped[member.level].push(member);
        });
        return grouped;
    };

    const handleMemberClick = (member: TeamMember) => {
        setSelectedMember(member);
    };

    const closePopup = () => {
        setSelectedMember(null);
    };

    const groupedMembers = groupByLevel(teamMembers);
    // Sort each level by name
    Object.values(groupedMembers).forEach((teamMembers) => {
        teamMembers.sort((a, b) => a.name.localeCompare(b.name));
    });

    return (
        <div className="container">
            <h2 className="team-header">Meet Our Team</h2>
            {/* Iterate over each level and display members in separate rows */}
            {Object.keys(groupedMembers).map((level) => (
                <div key={level} className="team-level">
                    <div className="grid">
                        {groupedMembers[parseInt(level)].map((member) => (
                            <div
                                key={member.name}
                                className="grid-item"
                                onClick={() => handleMemberClick(member)}
                            >
                                <img
                                    src={process.env.PUBLIC_URL + member.image}
                                    alt={member.name}
                                />
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            {selectedMember && <Popup member={selectedMember} closePopup={closePopup} />}
        </div>
    );

    // return (
    //     <div className="container">
    //         <h2 className="team-header">Meet Our Team</h2>
    //         <div className="grid">
    //             {teamMembers.map((member) => (
    //                 <div
    //                     key={member.name}
    //                     className="grid-item"
    //                     onClick={() => handleMemberClick(member)}
    //                 >
    //                     <img src={process.env.PUBLIC_URL + member.image} alt={member.name} />
    //                     <h3>{member.name}</h3>
    //                     <p>{member.role}</p>
    //                 </div>
    //             ))}
    //         </div>
    //         {selectedMember && <Popup member={selectedMember} closePopup={closePopup} />}
    //     </div>
    // );
};

export default Team;
