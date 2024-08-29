'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface TeamProps {
  messages: { sender: string; text: string; timestamp: string }[];
  contact: { name: string; avatar: string; id: number };
}

const Team: React.FC<TeamProps> = ({ messages, contact }) => {
  const [isPopupVisible, setPopupVisible] = useState<boolean>(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const formatDate = (timestamp: string) => {
    const [date, time] = timestamp.split(', ');
    return { date, time };
  };

  const groupedMessages = messages.reduce((acc, message) => {
    const { date } = formatDate(message.timestamp);
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(message);
    return acc;
  }, {} as Record<string, typeof messages>);

  const dateHeaders = Object.keys(groupedMessages);

  return (
    <div className="flex-1 bg-white flex flex-col border border-gray-200 shadow-[0px_2px_4px_0px_#00000013] rounded-[10px]">
      <div className="h-[10vh] max-h-[76px] mb-4 border-b border-gray-200 flex items-center px-4 gap-4">
        <div className="flex items-center gap-4 flex-1">
          <Image
            src={contact.avatar}
            alt={`${contact.name}'s avatar`}
            width={50}
            height={50}
          />
          <div className="flex flex-col">
            <span className="font-semibold text-md">{contact.name}</span>
            <div className="flex items-center mt-1">
             
              <span className="text-xs text-gray-500 ml-1">Private . 2k Members</span>
            </div>
          </div>
        </div>
        <div className="ml-auto relative">
          <Image
            src="/MsgImages/more.png"
            alt="More options"
            width={4}
            height={16}
            className="cursor-pointer"
            onClick={togglePopup}
          />
          {isPopupVisible && (
            <div className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-lg border border-gray-200 w-[160px]">
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">
                Team info
              </button>
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">
                Mute
              </button>
              <button className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-100 text-sm">
                Delete
              </button>
              <button className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-100 text-sm">
                Leave team
              </button>
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">
                Report/Block
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4">
        <div className="mt-4">
          {dateHeaders.map((date) => (
            <div key={date} className="mb-4">
              {date && (
                <div className="flex items-center justify-center text-gray-300 text-xs  mb-2">
                  <div className="flex border-t border-gray-100" style={{ width: '15%' }} />
                  <span className="px-2 ">{date}</span>
                  <div className="flex border-t border-gray-100" style={{ width: '15%' }} />
                </div>
              )}
              {groupedMessages[date].map((message, index) => {
                const { time } = formatDate(message.timestamp);
                return (
                  <div
                    key={index}
                    className={`mb-4 flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex ${message.sender === 'me' ? 'flex-row-reverse' : ''} items-center`}>
                      <div
                        className={`inline-flex items-center p-2 rounded-lg ${message.sender === 'me' ? 'bg-[#22B57333] text-[#198754]' : 'bg-gray-200'} text-sm`}
                      >
                        {message.text}
                      </div>
                      <div className={`text-xs ${message.sender === 'me' ? 'ml-4' : 'mr-4'} flex items-center`} style={{ color: '#6b7280', fontSize: '0.65rem' }}>
                        {time}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="border-t mt-4 px-4 py-2 flex items-center border border-gray-300 rounded m-5">
        <div className="flex items-center">
          <Image
            src="/MsgImages/emojis.png"
            alt="Emojis"
            width={18}
            height={18}
          />
          <div className="border-r border-gray-300 mx-2 h-6"></div>
          <Image
            src="/MsgImages/gallery.png"
            alt="Gallery"
            width={18}
            height={18}
          />
          <div className="border-r border-gray-300 mx-2 h-6"></div>
          <Image
            src="/MsgImages/link.png"
            alt="Link"
            width={13}
            height={18}
          />
          <div className="border-r border-gray-300 mx-2 h-6"></div>
        </div>
        <input
          type="text"
          placeholder="Write your comment..."
          className="flex-1 p-2 text-sm"
          style={{ boxSizing: 'border-box' }}
        />
        <button
          className="bg-[#22B573] text-white w-[20vw] max-w-[97px] h-[8vh] max-h-[34px] px-2 py-1 rounded border border-transparent ml-2 text-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Team;
