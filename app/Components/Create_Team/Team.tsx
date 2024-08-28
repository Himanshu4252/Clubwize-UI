"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import logo from "../../../public/assets/Team/logo.png";
import pg from "../../../public/assets/Team/pg.png";
import des from "../../../public/assets/Team/des.png";
import divi from "../../../public/assets/Team/divi.png";
import fast from "../../../public/assets/Team/fast.png";
import paper from "../../../public/assets/Team/paper.png";
import legal from "../../../public/assets/Team/leagal.png";
import Members from "./TeamPopup/Members";
import Name from "./TeamPopup/Name";
import Picture from "./TeamPopup/Picture";
import Created from "./TeamPopup/Created";
import Chat from "./Chat";

interface Team {
  name: string;
  image: StaticImageData;
  status: string;
  members: string;
  memberCount: string;
  messages: string[];
}

const teams: Team[] = [
  {
    name: "Team Forever",
    image: pg,
    status: "Cameron: 📷 Photos",
    members: "15+",
    memberCount: "green",
    messages: ["What value do you see in collaborating with us?", "Together, we could expand into new regions."],
  },
  {
    name: "Designers",
    image: des,
    status: "Cameron: thanks @john",
    members: "8+",
    memberCount: "green",
    messages: ["We need a more aggressive market strategy", "I suggest leveraging social media influencers"],
  },
  {
    name: "Divide and Conquer",
    image: divi,
    status: "Me: like your idea",
    members: "",
    memberCount: "",
    messages: [
      "The project is due in three weeks. ",
      "we are working on alternatives to meet the deadline.",
    ],
  },
  {
    name: "Fast Talkers",
    image: fast,
    status: "Barely has changed the group icon.",
    members: "",
    memberCount: "",
    messages: ["Message 1 from Fast Talkers", "Message 2 from Fast Talkers"],
  },
  {
    name: "Paper Pushers",
    image: paper,
    status: "Cameron: Shall we now?",
    members: "",
    memberCount: "",
    messages: ["We received some feedback from our client. ", "They are concerned about the pricing."],
  },
  {
    name: "Legal Eliminators",
    image: legal,
    status: "Me: like your idea",
    members: "",
    memberCount: "",
    messages: [
      "The new product launch is next month. ",
      "we still need to confirm the budget for the digital ads.",
    ],
  },
];

export default function Team() {
  const [isMemberOpen, setIsMemberOpen] = useState(false);
  const [isNameOpen, setIsNameOpen] = useState(false);
  const [isImgOpen, setIsImgOpen] = useState(false);
  const [isCreatedOpen, setIsCreatedOpen] = useState(false);

  const openCreated = () => setIsCreatedOpen(true);
  const closeCreated = () => setIsCreatedOpen(false);
  const openMember = () => setIsMemberOpen(true);
  const closeMember = () => setIsMemberOpen(false);
  const openName = () => setIsNameOpen(true);
  const closeName = () => setIsNameOpen(false);
  const openImg = () => setIsImgOpen(true);
  const closeImg = () => setIsImgOpen(false);


  const handleCreateClick = ()=>{
    closeChat();
    openMember();
  }

  const handleNextClick = () => {
    closeMember();
    openName();
  };

  const handleAfterClick = () => {
    closeName();
    openImg();
  };

  const handleThenClick = () => {
    closeImg();
    openCreated();
  };

  const closeThenClick = () => {
    closeImg();
    openName();
  };

  const closeAfterClick = () => {
    closeName();
    openMember();
  };

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

  const openChat = (team: Team) => {
    setSelectedTeam(team);
    setIsChatOpen(true);
  };
  const closeChat = () => setIsChatOpen(false);

  return (
    <div className="max-w-md mx-auto p-4 pb-0 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="flex w-auto">
          <Image src={logo} alt="logo" width={20} />
          <h2 className="text-sm font-semibold pl-3">Gretchen Team</h2>
        </div>
        <button
          onClick={handleCreateClick}
          className="flex items-center px-3 py-1 text-sm font-medium text-green-500 border border-green-500 rounded"
        >
          + Create team
        </button>
      </div>
      <div>
        {teams.map((team, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => openChat(team)}
          >
            <div className="flex items-center space-x-2">
              <Image
                src={team.image}
                alt={team.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <div className="text-sm font-semibold">{team.name}</div>
                <div className="text-xs text-gray-500">{team.status}</div>
              </div>
            </div>
            <div className="flex gap-3">
              {team.members && (
                <div
                  className={`flex items-center justify-center text-xs w-8 h-5 rounded-full bg-${team.memberCount}-500 text-white`}
                >
                  {team.members}
                </div>
              )}
              <button className="text-gray-500 hover:text-gray-700">•••</button>
            </div>
          </div>
        ))}
      </div>
      <Members
        isOpen={isMemberOpen}
        onClose={closeMember}
        onNext={handleNextClick}
      />

      <Name
        isOpen={isNameOpen}
        onClose={closeName}
        onAfter={handleAfterClick}
        closeAfter={closeAfterClick}
      />

      <Picture
        isOpen={isImgOpen}
        onClose={closeImg}
        onThen={handleThenClick}
        closeThen={closeThenClick}
      />

      <Created isOpen={isCreatedOpen} onClose={closeCreated} />

      {selectedTeam && (
        <Chat
          isOpen={isChatOpen}
          onClose={closeChat}
          teamName={selectedTeam.name}
          teamImage={selectedTeam.image}
          teamMessages={selectedTeam.messages}
        />
      )}
    </div>
  );
}
