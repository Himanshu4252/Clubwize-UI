'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ChatProps {
  messages: { sender: string; text: string; timestamp: string }[];
  contact: { name: string; avatar: string; id: number };
}

const Chat: React.FC<ChatProps> = ({ messages, contact }) => {
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
              <Image
                src="/MsgImages/online.png"
                alt="Online"
                width={8}
                height={8}
              />
              <span className="text-xs text-gray-500 ml-1">Online</span>
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
                Info
              </button>
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">
                Mute
              </button>
              <button className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-100 text-sm">
                Delete
              </button>
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">
                Archive
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
                <div className="flex items-center justify-center text-gray-300 text-xs mb-2">
                  <div className="flex border-t border-gray-100" style={{ width: '15%'}}  />
                  <span className="px-2">{date}</span>
                  <div className="flex border-t border-gray-100" style={{ width: '15%'}}/>
                </div>
              )}
              {groupedMessages[date].map((message, index) => {
                const { time } = formatDate(message.timestamp);
                const isMe = message.sender === 'me';
                return (
                  
                   <div key={index} className={`flex items-center mb-3 ${isMe ? 'justify-end' : 'justify-start'}`}
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
                );
              })}
            </div>
          ))}
        </div>

        {contact.id === 4 && (
          <div className="flex flex-col items-center justify-center mt-4">
            <Image
              src="/MsgImages/msgRequest.png"
              alt="Chat Icon"
              width={234}
              height={156}
            />
            <h2 className="font-semibold text-md mt-4">Do you know Brooklyn?</h2>
            <p className="text-center text-gray-600 mt-2 text-sm">
              Brooklyn just wants to chat with you. Evaluate and decide on requests by either approving or rejecting them.
            </p>
            <div className="flex gap-4 mt-4">
              <button className="bg-white text-red-500 border border-red-500 px-3 py-1.5 rounded text-sm flex items-center gap-2 hover:bg-red-100">
                <Image
                  src="/MsgImages/reject.png"
                  alt="Reject"
                  width={12}
                  height={12}
                />
                Reject
              </button>
              <button className="bg-white text-[#22B573] border border-[#22B573] px-3 py-1.5 rounded text-sm flex items-center gap-2 hover:bg-[#e6f6f0]">
                <Image
                  src="/MsgImages/accept.png"
                  alt="Accept"
                  width={12}
                  height={12}
                />
                Accept
              </button>
            </div>
          </div>
        )}
        {contact.id === 2 && (
    <div className="mt-4 flex items-center text-xs" style={{ color: '#22B573' }}>
      <Image
        src="/MsgImages/typing.png"
        alt="Typing"
        width={20}
        height={20}
      />
      <span className="ml-2">{contact.name.split(' ')[0]} is typing...</span>
    </div>
  )}
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

export default Chat;
