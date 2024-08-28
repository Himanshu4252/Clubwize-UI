import React, { useState } from 'react';
import Image from 'next/image';
import CreateTeam from './CreateTeam';

interface TeamListProps {
  teams: { id: number; name: string; lastMessage: string; avatar: string }[];
  onSelectTeam: (id: number) => void;
}

const TeamList: React.FC<TeamListProps> = ({ teams, onSelectTeam }) => {
  const [activeTeamId, setActiveTeamId] = useState<number | null>(null);
  const [showCreateTeam, setShowCreateTeam] = useState(false);


  const handleClick = (id: number) => {
    setActiveTeamId(id);
    onSelectTeam(id);
  };

  const renderMessageWithAtSymbol = (message: string) => {
    const parts = message.split(/(@\w+)/g);
    return parts.map((part, index) =>
      part.startsWith('@') ? (
        <span key={index} className="text-[#22B573]">{part}</span>
      ) : (
        part
      )
    );
  };
  const handleCreateTeamClick = () => {
    setShowCreateTeam(true);
  };

  const handleCloseCreateTeam = () => {
    setShowCreateTeam(false);
  };


  return (
    <div className="w-[400px] bg-white flex flex-col border border-gray-300 shadow-[0px_2px_4px_0px_#00000013] rounded-[10px]">
      <div className="font-semibold text-l flex justify-between items-center p-4 border-b border-gray-200">
        <div className="flex items-center">
          <div className="w-[28px] h-[28px] ml-2 flex items-center justify-center border border-gray-300 rounded-lg">
            <Image
              src="/GrpChatImg/backicon.png"
              alt="Back Icon"
              width={6}
              height={6}
            />
          </div>
          <div className="flex items-center">
            <Image
              src="/GrpChatImg/node.png"
              alt="Node Icon"
              width={14}
              height={14}
              className="m-2"
            />
            <p className="m-0">Gretchen Team</p>
          </div>
        </div>
        <button  onClick={handleCreateTeamClick} className="bg-white text-gray-800 text-sm py-1 px-4 border border-gray-200 rounded-md hover:bg-black hover:text-white transition-colors duration-200">
          + Create team
        </button>
      </div>

      <div className="w-full pt-4 pr-4 pl-4 pb-2 flex items-center border-b border-gray-200">
        <input
          type="text"
          placeholder="Search for..."
          className="flex-1 p-2 border border-gray-300 rounded-lg text-sm bg-gray-100"
        />
        <div className="w-8 h-8 flex items-center justify-center bg-gray-200 border border-gray-300 rounded-lg ml-3">
          <Image
            src="/GrpChatImg/search.png"
            alt="Search icon"
            width={16}
            height={16}
          />
        </div>
      </div>

      <ul className="flex-1 overflow-auto">
        {teams.map((team) => (
          <li
            key={team.id}
            className={`flex items-center p-4 cursor-pointer border-b border-gray-200 ${
              activeTeamId === team.id ? 'bg-green-100' : 'hover:bg-green-100'
            }`}
            onClick={() => handleClick(team.id)}
          >
            <Image
              src={team.avatar}
              alt={team.name}
              width={50}
              height={50}
              className="mr-4"
            />
            <div className="flex-1">
              <div className="font-bold text-sm">{team.name}</div>
              <div className={`text-gray-600 text-xs ${
                team.id === 1 || team.id === 2 ? 'font-bold' : ''
              }`}>
                {renderMessageWithAtSymbol(team.lastMessage)}
              </div>
            </div>
            <div className="flex items-center ml-4">
              {team.id === 1 && (
                <div className="w-8 h-8 flex items-center justify-center mr-2">
                  <Image
                    src="/GrpChatImg/unreadbadge.png"
                    alt="Unread Badge"
                    width={43}
                    height={31}
                  />
                </div>
              )}
              {team.id === 2 && (
                <div className="w-8 h-8 flex items-center justify-center mr-2">
                  <Image
                    src="/GrpChatImg/badge2.png"
                    alt="Badge 2"
                    width={43}
                    height={31}
                  />
                </div>
              )}
              <div className="w-8 h-8 flex items-center justify-center">
                <Image
                  src="/GrpChatImg/more.png"
                  alt="More options"
                  width={4}
                  height={16}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
      {showCreateTeam && <CreateTeam onClose={handleCloseCreateTeam} />}
    </div>
  );
};

export default TeamList;
