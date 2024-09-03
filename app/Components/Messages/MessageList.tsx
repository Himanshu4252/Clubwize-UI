import React, { useState } from 'react';
import Image from 'next/image';

interface MessageListProps {
  contacts: { id: number; name: string; lastMessage: string; avatar: string }[];
  onSelectContact: (id: number) => void;
}

const MessageList: React.FC<MessageListProps> = ({ contacts, onSelectContact }) => {
  const [activeContactId, setActiveContactId] = useState<number | null>(null);
  const [isPopupVisible, setPopupVisible] = useState<boolean>(false);
  const [isSelecting, setIsSelecting] = useState<boolean>(false);
  const [selectedContacts, setSelectedContacts] = useState<Set<number>>(new Set());

  const handleClick = (id: number) => {
    setActiveContactId(id);
    onSelectContact(id);
  };

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const toggleSelectChats = () => {
    setIsSelecting(!isSelecting);
  };

  const handleCheckboxChange = (id: number) => {
    setSelectedContacts(prevState => {
      const newSelectedContacts = new Set(prevState);
      if (newSelectedContacts.has(id)) {
        newSelectedContacts.delete(id);
      } else {
        newSelectedContacts.add(id);
      }
      return newSelectedContacts;
    });
  };

  const isFooterVisible = selectedContacts.size > 0;

  return (
    <div className="w-[400px] bg-white flex flex-col border border-gray-300 shadow-[0px_2px_4px_0px_#00000013] rounded-[10px]">
      <div className="font-semibold text-sm flex justify-between items-center p-4 border-b border-gray-300">
        Messages
        <div className="relative">
          <Image
            src="/MsgImages/more.png"
            alt="More options"
            width={4}
            height={16}
            onClick={togglePopup} 
            className="cursor-pointer"
          />
          {isPopupVisible && (
            <div 
              className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-lg border border-gray-300 w-[160px] z-50"
            >
              <button
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                onClick={toggleSelectChats}
              >
                Select chats
              </button>
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">
                Mute all
              </button>
              <button className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-100 text-sm">
                Delete all
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="w-full p-4 flex items-center ">
      <div className="relative w-full flex items-center">
  <Image
    src="/GrpChatImg/searchicon.png"
    alt="Search Icon"
    width={16}
    height={16}
    className="absolute left-3 w-5 h-5"
  />
  <input
    type="text"
    placeholder="Search for..."
    className="pl-10 p-2 border border-gray-300 rounded-lg w-full text-sm bg-gray-100 "
  />
</div>
        <div className="w-8 h-8 flex items-center justify-center bg-gray-200 border border-gray-300 rounded-lg ml-3">
          <Image
            src="/MsgImages/search.png"
            alt="Search icon"
            width={16}
            height={16}
          />
        </div>
      </div>

      {!isSelecting && (
        <div className="w-full p-4 flex items-center gap-2 border-b border-gray-200">
          <div className="flex items-center gap-2 flex-1">
            <div className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-300">
              <Image
                src="/MsgImages/msgreq.png"
                alt="Message Requests Icon"
                width={18}
                height={18}
              />
            </div>
            <span className="font-semibold text-gray-800 text-sm">Message Requests</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 flex items-center justify-center">
            <div className="w-[35px] h-[31px] px-2 py-1 gap-2 rounded-full bg-[#FD7E14] text-white flex items-center justify-center text-xs hover:bg-gray-800">
  3+
</div>


            </div>
            <div className="w-8 h-8 flex items-center justify-center">
            <button className=" rounded-full hover:bg-gray-100 focus:outline-none">
              <Image
                src="/MsgImages/arrow.png"
                alt="Arrow"
                width={5}
                height={25}
              />
              </button>
            </div>
          </div>
        </div>
      )}

      <ul className="flex-1 overflow-auto">
        {contacts.map((contact) => (
          <li
            key={contact.id}
            className={`flex items-center p-4 cursor-pointer border-b border-gray-200 ${
              activeContactId === contact.id ? 'bg-[#22B57314]' : 'hover:bg-[#22B57314]'
            }`}
            onClick={() => handleClick(contact.id)}
          >
            {isSelecting && (
              <input
                type="checkbox"
                className="mr-4"
                checked={selectedContacts.has(contact.id)}
                onChange={() => handleCheckboxChange(contact.id)}
              />
            )}
            <Image
              src={contact.avatar}
              alt={contact.name}
              width={50}
              height={50}
              className="mr-4"
            />
            <div className="flex-1">
              <div className="font-bold text-sm">{contact.name}</div>
              <div className="text-gray-600 text-xs">
                {contact.lastMessage}
              </div>
            </div>
            <div className="flex items-center ml-4">
              {contact.id === 1 && (
                <div className="w-8 h-8 flex items-center justify-center mr-2">
                 <div className="flex items-center justify-center w-38px] h-[26px] p-1.5 bg-[#22B573]  rounded-[43px] text-white text-xs hover:bg-gray-800 hover:text-white ">15+</div>
                </div>
              )}
              <div className="w-8 h-8 flex items-center justify-center">
                <Image
                  src="/MsgImages/more.png"
                  alt="More options"
                  width={4}
                  height={16}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>

      {selectedContacts.size > 0 && (
        <div className="w-full flex justify-center items-center bg-white border-t border-gray-300 p-2">
          <button className="bg-green-500 text-white px-4 py-2 rounded border border-transparent text-sm">Archive</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded border border-transparent ml-2 text-sm">Delete</button>
          <button className="bg-gray-300 text-black px-4 py-2 rounded border border-transparent ml-2 text-sm">Cancel</button>
        </div>
      )}
    </div>
  );
};

export default MessageList;
