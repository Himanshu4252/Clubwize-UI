'use client';

import React, { useState } from 'react';
import TeamChat from '@/app/Components/GroupChat/TeamChat';
import Team from '@/app/Components/GroupChat/Team';

const GroupChat = () => {
  const [selectedTeam, setSelectedTeam] = useState<number | null>(null);
  
  const teams = [
    { id: 1, name: 'Team Forever ❇', lastMessage: 'Cameron: Photos', avatar: '/GrpChatImg/team1.png' },
    { id: 2, name: '💼 Designers', lastMessage: 'Cameron: thanks @john', avatar: '/GrpChatImg/team2.png' },
    { id: 3, name: 'Divide and Conquer.', lastMessage: 'Me: like your idea', avatar: '/GrpChatImg/team3.png' },
    { id: 4, name: 'Fast Talkers 👁', lastMessage: 'Barely had changed the group icon', avatar: '/GrpChatImg/team4.png' },
    { id: 5, name: 'Paper Pushers', lastMessage: 'Cameron: Shall we now?', avatar: '/GrpChatImg/team5.png' },
    { id: 6, name: 'Legal Eliminators ⭐', lastMessage: 'Me: like your idea', avatar: '/GrpChatImg/team6.png' },
  ];
  
  const chatMessages: { [key: number]: Array<{ sender: string; text: string; timestamp: string }> } =  {
    1: [
        { sender: 'Brooklyn Simmons', text: 'Lorem ipsum dolor sit amet consectetur🤴. convallis vitae non et tellus hac.', timestamp: 'Yesterday, 8:53 PM' },
        { sender: 'Brooklyn Simmons', text: 'Lorem ipsum dolor sit amet consectetur.', timestamp: 'Yesterday, 8:53 PM' },
        { sender: 'me', text: 'Lorem ipsum dolor sit amet .', timestamp: 'Yesterday, 8:53 PM' },
        { sender: 'Brooklyn Simmons', text: 'Lorem ipsum dolor sit amet consectetur🤴. convallis vitae non et tellus hac.', timestamp: 'Yesterday, 8:53 PM' },
        { sender: 'Brooklyn Simmons', text: 'Lorem ipsum dolor sit amet consectetur.', timestamp: 'Yesterday, 8:53 PM' },
    ],
    2: [
        { sender: 'Brooklyn Simmons', text: 'Lorem ipsum dolor sit amet consectetur🤴. convallis vitae non et tellus hac.', timestamp: 'Yesterday, 8:53 PM' },
        { sender: 'Brooklyn Simmons', text: 'Lorem ipsum dolor sit amet consectetur.', timestamp: 'Yesterday, 8:53 PM' },
        { sender: 'me', text: 'Lorem ipsum dolor sit amet .', timestamp: 'Yesterday, 8:53 PM' },
        { sender: 'Brooklyn Simmons', text: 'Lorem ipsum dolor sit amet consectetur🤴. convallis vitae non et tellus hac.', timestamp: 'Yesterday, 8:53 PM' },
        { sender: 'Brooklyn Simmons', text: 'Lorem ipsum dolor sit amet consectetur.', timestamp: 'Yesterday, 8:53 PM' },
    ],
    3: [
        { sender: 'Brooklyn Simmons', text: 'Lorem ipsum dolor sit amet consectetur🤴. convallis vitae non et tellus hac.', timestamp: 'Yesterday, 8:53 PM' },
        { sender: 'Brooklyn Simmons', text: 'Lorem ipsum dolor sit amet consectetur.', timestamp: 'Yesterday, 8:53 PM' },
        { sender: 'me', text: 'Lorem ipsum dolor sit amet .', timestamp: 'Yesterday, 8:53 PM' },
        { sender: 'Brooklyn Simmons', text: 'Lorem ipsum dolor sit amet consectetur🤴. convallis vitae non et tellus hac.', timestamp: 'Yesterday, 8:53 PM' },
        { sender: 'Brooklyn Simmons', text: 'Lorem ipsum dolor sit amet consectetur.', timestamp: 'Yesterday, 8:53 PM' },
    ],
    4: [
        { sender: 'Brooklyn Simmons', text: 'Lorem ipsum dolor sit amet consectetur🤴. convallis vitae non et tellus hac.', timestamp: 'Yesterday, 8:53 PM' },
        { sender: 'Brooklyn Simmons', text: 'Lorem ipsum dolor sit amet consectetur.', timestamp: 'Yesterday, 8:53 PM' },
        { sender: 'me', text: 'Lorem ipsum dolor sit amet .', timestamp: 'Yesterday, 8:53 PM' },
        { sender: 'Brooklyn Simmons', text: 'Lorem ipsum dolor sit amet consectetur🤴. convallis vitae non et tellus hac.', timestamp: 'Yesterday, 8:53 PM' },
        { sender: 'Brooklyn Simmons', text: 'Lorem ipsum dolor sit amet consectetur.', timestamp: 'Yesterday, 8:53 PM' },
    ],
    5: [
        { sender: 'Brooklyn Simmons', text: 'Lorem ipsum dolor sit amet consectetur🤴. convallis vitae non et tellus hac.', timestamp: 'Yesterday, 8:53 PM' },
        { sender: 'Brooklyn Simmons', text: 'Lorem ipsum dolor sit amet consectetur.', timestamp: 'Yesterday, 8:53 PM' },
        { sender: 'me', text: 'Lorem ipsum dolor sit amet .', timestamp: 'Yesterday, 8:53 PM' },
        { sender: 'Brooklyn Simmons', text: 'Lorem ipsum dolor sit amet consectetur🤴. convallis vitae non et tellus hac.', timestamp: 'Yesterday, 8:53 PM' },
        { sender: 'Brooklyn Simmons', text: 'Lorem ipsum dolor sit amet consectetur.', timestamp: 'Yesterday, 8:53 PM' },
    ],
    6: [
        { sender: 'Brooklyn Simmons', text: 'Lorem ipsum dolor sit amet consectetur🤴. convallis vitae non et tellus hac.', timestamp: 'Yesterday, 8:53 PM' },
        { sender: 'Brooklyn Simmons', text: 'Lorem ipsum dolor sit amet consectetur.', timestamp: 'Yesterday, 8:53 PM' },
        { sender: 'me', text: 'Lorem ipsum dolor sit amet .', timestamp: 'Yesterday, 8:53 PM' },
        { sender: 'Brooklyn Simmons', text: 'Lorem ipsum dolor sit amet consectetur🤴. convallis vitae non et tellus hac.', timestamp: 'Yesterday, 8:53 PM' },
        { sender: 'Brooklyn Simmons', text: 'Lorem ipsum dolor sit amet consectetur.', timestamp: 'Yesterday, 8:53 PM' },
    ],
  };
  
  const handleSelectTeam = (id: number) => {
    setSelectedTeam(id);
  };
  
  const selectedTeamDetails = teams.find(team => team.id === selectedTeam);

  return (
    <div className="flex h-screen gap-5">
      <TeamChat teams={teams} onSelectTeam={handleSelectTeam} />
      {selectedTeam !== null && selectedTeamDetails && (
        <Team 
          messages={chatMessages[selectedTeam] || []}
          contact={selectedTeamDetails} 
        />
      )}
    </div>
  );
};

export default GroupChat;
