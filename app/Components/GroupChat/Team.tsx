'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface TeamProps {
  messages: { sender: string; text: string; timestamp: string }[];
  contact: { name: string; avatar: string; id: number };
  member: { name: string; avatar: string };
}

const Team: React.FC<TeamProps> = ({ messages, contact, member }) => {
  const [isPopupVisible, setPopupVisible] = useState<boolean>(false);
  const [selectedMessageIndex, setSelectedMessageIndex] = useState<number | null>(null);
  const emojiPopupRef = useRef<HTMLDivElement>(null);

  const toggleEmojiPopup = (index: number) => {
    setSelectedMessageIndex(selectedMessageIndex === index ? null : index);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (emojiPopupRef.current && !emojiPopupRef.current.contains(event.target as Node)) {
      setSelectedMessageIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
    <div className="flex-1 bg-white flex flex-col border border-gray-200 shadow-[0px_2px_4px_0px_#00000013] rounded-[10px]  sticky top-20">
      <div className="h-[10vh] max-h-[76px] mb-4 border-b border-gray-200 flex items-center px-4 gap-4 min-w-[30vw]">
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
              <span className="text-xs text-gray-500 ml-1">Private • 2k Members</span>
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
            onClick={() => setPopupVisible(!isPopupVisible)}
          />
          {isPopupVisible && (
            <div className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-lg border border-gray-200 w-[160px]">
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">Team info</button>
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">Mute</button>
              <button className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-100 text-sm">Delete</button>
              <button className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-100 text-sm">Leave team</button>
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">Report/Block</button>
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4">
        <div className="mt-4">
          {dateHeaders.map((date) => (
            <div key={date} className="mb-4">
              {date && (
                <div className="flex items-center justify-center text-gray-300 text-xs mb-2">
                  <div className="flex border-t border-gray-100" style={{ width: '15%' }} />
                  <span className="px-2">{date}</span>
                  <div className="flex border-t border-gray-100" style={{ width: '15%' }} />
                </div>
              )}
              {groupedMessages[date].map((message, index) => {
                const { time } = formatDate(message.timestamp);
                const isMe = message.sender === 'me';
                const isSelected = selectedMessageIndex === index;

                const isFirstMessageFromContact =
                  index === 0 || groupedMessages[date][index - 1].sender !== message.sender;

                return (
                  <div key={index} className={`mb-4 ${isMe ? 'text-right' : ''}`} onClick={() => toggleEmojiPopup(index)}>
                    {!isMe && isFirstMessageFromContact && (
                      <div className="flex items-center mb-2">
                        <Image src={member.avatar} alt={`${member.name}'s avatar`} width={30} height={30} className="mr-2 " />
                        <span className="font-semibold text-sm">{member.name}</span>
                      </div>
                    )}
                    <div className={`relative flex ${isMe ? 'flex-row-reverse justify-end' : 'justify-start'}`}>
                      <div className={`flex items-center ${isMe ? 'justify-end' : 'justify-start'}`}
                        style={{ marginLeft: isMe ? 'auto' : '0' }}>
                        {isMe ? (
                          <>
                            <div className="text-gray-300 text-xs mr-2 text-[0.60rem] flex items-center">
                              {time}
                            </div>
                            <div className={`inline-flex items-center p-2 rounded-lg ${isMe ? 'bg-[#22B57333] text-[#198754]' : 'bg-gray-200'} text-sm`}>
                              {message.text}
                            </div>
                          </>
                        ) : (
                          <>
                            <div className={`inline-flex items-center p-2 rounded-lg ${isMe ? 'bg-[#22B57333] text-[#198754]' : 'bg-gray-200'} text-sm`}>
                              {message.text}
                            </div>
                            <div className="text-gray-300 text-xs ml-2 text-[0.60rem] flex items-center">
                              {time}
                            </div>
                          </>
                        )}
                      </div>
                      {isSelected && (
                        <div ref={emojiPopupRef} className={`absolute ${isMe ? 'bottom-full right-0 mt-8' : 'top-full mt-2'} bg-white shadow-md rounded-lg border border-gray-300 p-2 flex gap-1 z-50`}>
                          <span>😀</span>
                          <span>😅</span>
                          <span>😊</span>
                          <span>😌</span>
                          <span>😙</span>
                          <span>😜</span>
                        </div>
                      )}
                    </div>
                    {isMe && (
                      <div className="flex items-center justify-end mt-2">
                        <span className="text-xs text-gray-400 mr-0.5 ">Seen by 89</span>
                        <div className="flex -space-x-2 ">
                          {[1, 2, 3, 4, 5].map((i, index) => (
                            <Image
                              key={i}
                              src={`/GrpChatImg/avatar${i}.png`}
                              alt={`avatar${i}`}
                              width={20}
                              height={20}
                              className="rounded-full border border-white"
                              style={{ zIndex: 0 + index, marginLeft: index !== 0 ? '-10px' : '0' }}
                            />
                          ))}
                        </div>

                      </div>
                    )}
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
