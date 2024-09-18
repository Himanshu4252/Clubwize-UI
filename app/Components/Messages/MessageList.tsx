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
    <div className=" w-[380px] lg:w-[380px] sm:w-[250px] bg-white flex flex-col border border-gray-300 shadow-[0px_2px_4px_0px_#00000013] rounded-[10px]">
      <div className="font-semibold text-sm flex justify-between items-center p-3 border-b border-gray-300">
        Messages
        <div className="relative">
        <svg width="4" height="16" viewBox="0 0 5 18"  onClick={togglePopup} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.49982 6.90839C1.34943 6.90839 0.408203 7.84961 0.408203 9C0.408203 10.1504 1.34943 11.0916 2.49982 11.0916C3.6502 11.0916 4.59143 10.1504 4.59143 9C4.59143 7.84961 3.6502 6.90839 2.49982 6.90839ZM2.49982 0.633545C1.34943 0.633545 0.408203 1.57477 0.408203 2.72516C0.408203 3.87555 1.34943 4.81677 2.49982 4.81677C3.6502 4.81677 4.59143 3.87555 4.59143 2.72516C4.59143 1.57477 3.6502 0.633545 2.49982 0.633545ZM2.49982 13.1832C1.34943 13.1832 0.408203 14.1245 0.408203 15.2748C0.408203 16.4252 1.34943 17.3665 2.49982 17.3665C3.6502 17.3665 4.59143 16.4252 4.59143 15.2748C4.59143 14.1245 3.6502 13.1832 2.49982 13.1832Z" fill="#495057"/>
          </svg>
         
          {isPopupVisible && (
            <div 
              className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-lg border border-gray-300 w-[160px] lg:w-[160px] sm:w-[120px] z-50"
            >
              <button
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm lg:text-sm sm:text-xs"
                onClick={toggleSelectChats}
              >
                Select chats
              </button>
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm lg:text-sm sm:text-xs">
                Mute all
              </button>
              <button className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-100 text-sm lg:text-sm sm:text-xs">
                Delete all
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="w-full pl-4 pr-4 pt-4 pb-2 flex items-center ">
      <div className="relative w-full flex items-center">
  <svg
    className="absolute left-3 top-1/2 transform -translate-y-1/2"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5 16.5005C11.2879 16.5005 12.0682 16.3453 12.7961 16.0438C13.5241 15.7423 14.1855 15.3003 14.7427 14.7431C15.2998 14.186 15.7418 13.5246 16.0433 12.7966C16.3448 12.0687 16.5 11.2884 16.5 10.5005C16.5 9.71257 16.3448 8.93236 16.0433 8.2044C15.7418 7.47645 15.2998 6.81501 14.7427 6.25786C14.1855 5.70071 13.5241 5.25875 12.7961 4.95723C12.0682 4.6557 11.2879 4.5005 10.5 4.5005C8.90872 4.5005 7.38259 5.13264 6.25737 6.25786C5.13216 7.38308 4.50002 8.9092 4.50002 10.5005C4.50002 12.0918 5.13216 13.6179 6.25737 14.7431C7.38259 15.8684 8.90872 16.5005 10.5 16.5005ZM16.82 15.4065L20.4 18.9865C20.4955 19.0788 20.5716 19.1892 20.6239 19.3113C20.6762 19.4333 20.7037 19.5645 20.7048 19.6973C20.7058 19.8301 20.6804 19.9618 20.63 20.0846C20.5797 20.2075 20.5053 20.3191 20.4114 20.4129C20.3174 20.5067 20.2057 20.5809 20.0828 20.6311C19.9599 20.6813 19.8282 20.7065 19.6954 20.7052C19.5626 20.704 19.4314 20.6763 19.3095 20.6238C19.1875 20.5713 19.0772 20.4951 18.985 20.3995L15.405 16.8195C13.7975 18.0674 11.7748 18.6557 9.74877 18.4647C7.72273 18.2737 5.84562 17.3178 4.49957 15.7916C3.15351 14.2653 2.4397 12.2834 2.50344 10.2494C2.56718 8.2154 3.40368 6.28213 4.84266 4.84315C6.28164 3.40417 8.21492 2.56767 10.2489 2.50393C12.283 2.44019 14.2648 3.154 15.7911 4.50005C17.3173 5.84611 18.2732 7.72322 18.4642 9.74926C18.6552 11.7753 18.0669 13.798 16.819 15.4055L16.82 15.4065Z"
      fill="#6C757D"
    />
  </svg>

  <input
    type="text"
    placeholder="Search for..."
    className="pl-10 p-1 h-9 sm:h-7 lg:h-9 border border-gray-300 rounded-md w-full text-sm sm:text-xs bg-gray-100"
  />
</div>

        <div className="lg:w-10 lg:h-9 sm:w-8 sm:h-7 flex items-center justify-center bg-gray-200 border border-gray-300 sm:rounded-[8px] ml-3">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.00077 0C0.735344 0 0.480799 0.120413 0.293115 0.334736C0.105441 0.549071 0 0.839761 0 1.14287C0 1.44599 0.105441 1.73668 0.293115 1.95101C0.480799 2.16533 0.735344 2.28575 1.00077 2.28575H12.0092C12.2746 2.28575 12.5292 2.16533 12.7168 1.95101C12.9045 1.73668 13.01 1.44599 13.01 1.14287C13.01 0.839761 12.9045 0.549071 12.7168 0.334736C12.5292 0.120413 12.2746 0 12.0092 0H1.00077ZM1.00077 4.57149C0.735344 4.57149 0.480799 4.69191 0.293115 4.90623C0.105441 5.12056 0 5.41125 0 5.71437C0 6.01748 0.105441 6.30817 0.293115 6.52251C0.480799 6.73683 0.735344 6.85724 1.00077 6.85724H8.00614C8.27154 6.85724 8.52613 6.73683 8.71378 6.52251C8.90142 6.30817 9.0069 6.01748 9.0069 5.71437C9.0069 5.41125 8.90142 5.12056 8.71378 4.90623C8.52613 4.69191 8.27154 4.57149 8.00614 4.57149H1.00077ZM1.00077 9.14299C0.735344 9.14299 0.480799 9.26345 0.293115 9.47774C0.105441 9.69203 0 9.98277 0 10.2859C0 10.589 0.105441 10.8797 0.293115 11.094C0.480799 11.3083 0.735344 11.4287 1.00077 11.4287H5.00383C5.26926 11.4287 5.5238 11.3083 5.71149 11.094C5.89916 10.8797 6.0046 10.589 6.0046 10.2859C6.0046 9.98277 5.89916 9.69203 5.71149 9.47774C5.5238 9.26345 5.26926 9.14299 5.00383 9.14299H1.00077ZM13.01 5.71437C13.01 5.41125 12.9045 5.12056 12.7168 4.90623C12.5292 4.69191 12.2746 4.57149 12.0092 4.57149C11.7438 4.57149 11.4892 4.69191 11.3016 4.90623C11.1139 5.12056 11.0084 5.41125 11.0084 5.71437V12.0985L9.71445 10.6207C9.5257 10.4125 9.27291 10.2973 9.01051 10.2999C8.74811 10.3025 8.49711 10.4228 8.31157 10.6347C8.12603 10.8466 8.02075 11.1332 8.01845 11.4328C8.01614 11.7325 8.11702 12.0212 8.29936 12.2367L11.3017 15.6654C11.4893 15.8797 11.7438 16 12.0092 16C12.2746 16 12.5291 15.8797 12.7167 15.6654L15.719 12.2367C15.9014 12.0212 16.0023 11.7325 16 11.4328C15.9977 11.1332 15.8924 10.8466 15.7068 10.6347C15.5213 10.4228 15.2703 10.3025 15.0079 10.2999C14.7455 10.2973 14.4927 10.4125 14.304 10.6207L13.01 12.0985V5.71437Z" fill="#6C757D"/>
</svg>
        </div>
      </div>

      {!isSelecting && (
        <div className="w-full p-3 flex items-center gap-2 border-b border-gray-200">
          <div className="flex items-center gap-2 flex-1">
            <div className="lg:w-8 lg:h-8 flex items-center justify-center rounded-lg border border-gray-300 sm:w-6 sm:h-6 ">
            <svg width="18" height="14" className='sm:w-5 sm:h-3 lg:w-6 lg:h-4' viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3772 9.02341C11.6799 8.29481 10.8421 7.7648 9.95966 7.47617C10.8389 6.69033 11.3924 5.55325 11.3924 4.29032C11.3924 1.92463 9.45039 0 7.06331 0C4.67624 0 2.73417 1.92463 2.73417 4.29032C2.73417 5.55325 3.28774 6.69033 4.16693 7.47617C3.28447 7.76484 2.44666 8.29488 1.74938 9.02344C0.621281 10.2021 0 11.7289 0 13.3226V14H14.1266V13.3226C14.1266 11.7289 13.5053 10.2021 12.3772 9.02341ZM4.10126 4.29032C4.10126 2.6717 5.43002 1.35484 7.06328 1.35484C8.69653 1.35484 10.0253 2.6717 10.0253 4.29032C10.0253 5.90894 8.69653 7.22581 7.06328 7.22581C5.43002 7.22581 4.10126 5.90894 4.10126 4.29032ZM1.41525 12.6452C1.75451 10.278 3.82665 8.58064 5.69619 8.58064H8.43036C10.2999 8.58064 12.3721 10.278 12.7113 12.6452H1.41525Z" fill="#212529"/>
<path d="M15.9494 5.87112V3.83887H14.5823V5.87112H12.5316V7.22596H14.5823V9.25822H15.9494V7.22596H18V5.87112H15.9494Z" fill="#212529"/>
</svg>

            </div>
            <span className="font-semibold text-gray-800 lg:text-sm sm:text-xs">Message Requests</span>
          </div>
          <div className="flex items-center lg:gap-4 sm:gap-2">
            <div className="w-8 h-8 flex items-center justify-center">
            <div className="w-[35px] h-[30px] lg:w-[35px] h-[30px] sm:w-[25px] sm:h-[18px] px-2 py-1 gap-2 rounded-full bg-[#FD7E14] text-white flex items-center justify-center text-xs sm:text-[0.7rem] hover:bg-gray-800">
  3+
</div>


            </div>
            <div className="w-8 h-8 flex items-center justify-center">
            <button className=" rounded-full hover:bg-gray-100 focus:outline-none">
            <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.2438 5.90707L0.388106 9.75995C0.102948 10.0451 0.102948 10.5063 0.388106 10.7884C0.673265 11.0705 1.13437 11.0705 1.41953 10.7884L5.7879 6.42281C6.06395 6.14674 6.07002 5.70381 5.80913 5.41864L1.42256 1.02272C1.27998 0.880131 1.0919 0.810354 0.90685 0.810354C0.7218 0.810354 0.533718 0.880131 0.391139 1.02272C0.105981 1.30789 0.105981 1.76902 0.391139 2.05116L4.2438 5.90707Z" fill="#212529"/>
</svg>

              </button>
            </div>
          </div>
        </div>
      )}

      <ul className="flex-1 overflow-auto">
        {contacts.map((contact) => (
          <li
            key={contact.id}
            className={`flex items-center lg:p-4 sm:p-2 cursor-pointer border-b border-gray-200 ${
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
              width={40}
              height={40}
               className="mr-4 lg:mr-4 sm:mr-2 w-10 h-10 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
            />
            <div className="flex-1">
              <div className="font-bold lg:text-sm sm:text-xs">{contact.name}</div>
              <div className="text-gray-600 lg:text-xs sm:text-[0.7rem] truncate text-overflow:ellipsis ">
                {contact.lastMessage}
              </div>
            </div>
            <div className="flex items-center">
              {contact.id === 1 && (
                <div className="w-8 h-8 flex items-center justify-center mr-2">
                 <div className="lg:w-[38px] lg:h-[26px] sm:w-[30px] sm:h-[18px] flex items-center justify-center  p-1.5 bg-[#22B573]  rounded-[43px] text-white lg:text-xs hover:bg-gray-800 hover:text-white sm:text-[0.7rem] ">15+</div>
                </div>
              )}
              <div className="w-8 h-8 flex items-center justify-center">
              <svg width="4" height="16" viewBox="0 0 5 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.49982 6.90839C1.34943 6.90839 0.408203 7.84961 0.408203 9C0.408203 10.1504 1.34943 11.0916 2.49982 11.0916C3.6502 11.0916 4.59143 10.1504 4.59143 9C4.59143 7.84961 3.6502 6.90839 2.49982 6.90839ZM2.49982 0.633545C1.34943 0.633545 0.408203 1.57477 0.408203 2.72516C0.408203 3.87555 1.34943 4.81677 2.49982 4.81677C3.6502 4.81677 4.59143 3.87555 4.59143 2.72516C4.59143 1.57477 3.6502 0.633545 2.49982 0.633545ZM2.49982 13.1832C1.34943 13.1832 0.408203 14.1245 0.408203 15.2748C0.408203 16.4252 1.34943 17.3665 2.49982 17.3665C3.6502 17.3665 4.59143 16.4252 4.59143 15.2748C4.59143 14.1245 3.6502 13.1832 2.49982 13.1832Z" fill="#495057"/>
          </svg>
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
