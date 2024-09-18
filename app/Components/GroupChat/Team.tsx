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
    <div className="flex-1 w-[380px] lg:w-[380px] sm:w-[250px] bg-white flex flex-col border border-gray-200 shadow-[0px_2px_4px_0px_#00000013] rounded-[10px] mr-2 sticky top-[8vh]">
      <div className="h-[10vh] lg:h-[10vh] sm:h-[5vh] max-h-[76px] lg:p-4 sm:p-1 sm:pt-2 sm:pb-2 mb-4 border-b border-gray-200 flex items-center px-4 gap-4 min-w-[30vw]">
        <div className="flex items-center gap-4 flex-1">
          <Image
            src={contact.avatar}
            alt={`${contact.name}'s avatar`}
            width={40}
            height={40}
            className="w-10 h-10 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-md lg:text-md sm:text-xs">{contact.name}</span>
            <div className="flex items-center mt-1 lg:mt-1 sm:mt-0">
              <span className="text-xs lg:text-xs sm:text-[0.7rem] text-gray-500 ml-1">Private • 2k Members</span>
            </div>
          </div>
        </div>
        <div className="ml-auto relative mr-2">
        <svg width="4" height="16" viewBox="0 0 5 18"   onClick={() => setPopupVisible(!isPopupVisible)} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.49982 6.90839C1.34943 6.90839 0.408203 7.84961 0.408203 9C0.408203 10.1504 1.34943 11.0916 2.49982 11.0916C3.6502 11.0916 4.59143 10.1504 4.59143 9C4.59143 7.84961 3.6502 6.90839 2.49982 6.90839ZM2.49982 0.633545C1.34943 0.633545 0.408203 1.57477 0.408203 2.72516C0.408203 3.87555 1.34943 4.81677 2.49982 4.81677C3.6502 4.81677 4.59143 3.87555 4.59143 2.72516C4.59143 1.57477 3.6502 0.633545 2.49982 0.633545ZM2.49982 13.1832C1.34943 13.1832 0.408203 14.1245 0.408203 15.2748C0.408203 16.4252 1.34943 17.3665 2.49982 17.3665C3.6502 17.3665 4.59143 16.4252 4.59143 15.2748C4.59143 14.1245 3.6502 13.1832 2.49982 13.1832Z" fill="#495057"/>
          </svg>
           
          {isPopupVisible && (
            <div className="absolute right-0 z-50 top-full mt-2 bg-white shadow-lg rounded-lg border border-gray-200 w-[160px] lg:w-[160px] sm:w-[120px]">
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm lg:text-sm sm:text-xs">Team info</button>
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm lg:text-sm sm:text-xs">Mute</button>
              <button className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-100 text-sm lg:text-sm sm:text-xs">Delete</button>
              <button className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-100 text-sm lg:text-sm sm:text-xs">Leave team</button>
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm lg:text-sm sm:text-xs">Report/Block</button>
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 lg:px-4 sm:px-2">
        <div className="mt-4">
          {dateHeaders.map((date) => (
            <div key={date} className="mb-4">
              {date && (
                <div className="flex items-center justify-center text-gray-300 text-xs lg:text-xs sm:text-[0.7rem] mb-2">
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
                        <Image src={member.avatar} alt={`${member.name}'s avatar`} width={30} height={30} className="mr-2 w-8 h-8 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-8 lg:h-8" />
                        <span className="font-semibold text-sm lg:text-sm sm:text-xs">{member.name}</span>
                      </div>
                    )}
                    <div className={`relative flex ${isMe ? 'flex-row-reverse justify-end' : 'justify-start'}`}>
                      <div className={`flex items-center ${isMe ? 'justify-end' : 'justify-start'}`}
                        style={{ marginLeft: isMe ? 'auto' : '0' }}>
                        {isMe ? (
                          <>
                            <div className="text-gray-300 text-xs lg:text-xs mr-2 sm:text-[0.60rem] flex items-center">
                              {time}
                            </div>
                            <div className={`inline-flex items-center p-2 rounded-lg ${isMe ? 'bg-[#22B57333] text-[#198754]' : 'bg-gray-200'} text-sm lg:text-sm sm:text-xs`}>
                              {message.text}
                            </div>
                          </>
                        ) : (
                          <>
                            <div className={`inline-flex items-center p-2 rounded-lg ${isMe ? 'bg-[#22B57333] text-[#198754]' : 'bg-gray-200'} text-sm lg:text-sm sm:text-xs`}>
                              {message.text}
                            </div>
                            <div className="text-gray-300 text-xs lg:text-xs ml-2 sm:text-[0.60rem] flex items-center">
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
                        <span className="text-xs lg:text-xs sm:text-[0.6rem] text-gray-400 mr-0.5 ">Seen by 89</span>
                        <div className="flex -space-x-2 ">
                          {[1, 2, 3, 4, 5].map((i, index) => (
                            <Image
                              key={i}
                              src={`/GrpChatImg/avatar${i}.png`}
                              alt={`avatar${i}`}
                              width={20}
                              height={20}
                              className="rounded-full border border-white  w-5 h-5 lg:w-5 lg:h-5 sm:w-4 sm:h-4"
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
      <div className="border-t mt-4 px-4 lg:px-4 sm:px-2 py-2 lg:py-2 sm:py-1 flex items-center border border-gray-300 rounded m-5">
        <div className="flex items-center">
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M18 9.21387C18 14.1844 13.9705 18.2139 9 18.2139C4.02943 18.2139 0 14.1844 0 9.21387C0 4.2433 4.02943 0.213867 9 0.213867C13.9705 0.213867 18 4.2433 18 9.21387ZM7.2 6.51387C7.2 6.01682 6.79705 5.61387 6.3 5.61387C5.80295 5.61387 5.4 6.01682 5.4 6.51387V7.41387C5.4 7.91094 5.80295 8.31387 6.3 8.31387C6.79705 8.31387 7.2 7.91094 7.2 7.41387V6.51387ZM11.7 5.61387C12.1971 5.61387 12.6 6.01682 12.6 6.51387V7.41387C12.6 7.91094 12.1971 8.31387 11.7 8.31387C11.2029 8.31387 10.8 7.91094 10.8 7.41387V6.51387C10.8 6.01682 11.2029 5.61387 11.7 5.61387ZM4.71335 11.2389C4.52695 10.916 4.11413 10.8054 3.79128 10.9918C3.46843 11.1782 3.35781 11.591 3.54421 11.9139C4.09715 12.8716 4.89244 13.6669 5.85017 14.2198C6.80789 14.7728 7.89426 15.0639 9.00018 15.0639C10.106 15.0639 11.1925 14.7728 12.1502 14.2198C13.1079 13.6669 13.9032 12.8716 14.4562 11.9139C14.6426 11.591 14.5319 11.1782 14.209 10.9918C13.8862 10.8054 13.4734 10.916 13.287 11.2389C12.8525 11.9914 12.2277 12.6162 11.4752 13.0507C10.7227 13.4852 9.86904 13.7139 9.00018 13.7139C8.13123 13.7139 7.27767 13.4852 6.52517 13.0507C5.77267 12.6162 5.14779 11.9914 4.71335 11.2389Z" fill="#212529"/>
</svg>

          <div className="border-r border-gray-300 mx-2 h-6"></div>
          <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.6665 4.63648L16.6309 12.0408C16.6051 12.432 16.4948 12.8129 16.3075 13.1574C16.1202 13.5018 15.8605 13.8016 15.5462 14.0359C15.5066 14.0634 15.4604 14.0797 15.4124 14.0831C15.3644 14.0865 15.3163 14.077 15.2732 14.0554C15.2302 14.0339 15.1937 14.0012 15.1676 13.9607C15.1416 13.9202 15.1268 13.8735 15.1251 13.8254V6.41161C15.1698 5.92821 15.1074 5.44091 14.9424 4.98435C14.7774 4.52779 14.5138 4.1132 14.1704 3.77005C13.827 3.42691 13.4123 3.16364 12.9556 2.99898C12.4989 2.83431 12.0116 2.7723 11.5282 2.81734H3.40593C3.14703 2.81734 3.14099 2.58434 3.15912 2.48078C3.23197 1.77878 3.57635 1.13307 4.11874 0.681486C4.42497 0.476226 4.76921 0.33436 5.13114 0.264256C5.49308 0.194151 5.86539 0.197227 6.22611 0.273301L15.3399 1.5505C15.7088 1.57733 16.0686 1.67774 16.3981 1.84581C16.7276 2.01388 17.0201 2.24621 17.2583 2.5291C17.464 2.83515 17.6061 3.17938 17.6762 3.54138C17.7463 3.90338 17.743 4.27578 17.6665 4.63648ZM13.828 6.41161V13.8918C13.8725 14.2043 13.8437 14.5228 13.7439 14.8222C13.644 15.1216 13.4759 15.3937 13.2529 15.6169C13.0298 15.8402 12.7578 16.0085 12.4585 16.1085C12.1592 16.2086 11.8407 16.2376 11.5282 16.1934H2.32204C2.00938 16.2381 1.69061 16.2094 1.39098 16.1095C1.09135 16.0097 0.819079 15.8414 0.595751 15.6181C0.372423 15.3948 0.20417 15.1225 0.104322 14.8229C0.00447339 14.5233 -0.0242268 14.2045 0.0204949 13.8918V6.41161C-0.0239291 6.09909 0.00499399 5.78052 0.104975 5.48111C0.204956 5.1817 0.373252 4.90967 0.596542 4.68654C0.819832 4.46342 1.09199 4.29533 1.39147 4.19557C1.69096 4.09582 2.00955 4.06713 2.32204 4.11179H11.5282C11.8406 4.06743 12.1589 4.09634 12.4582 4.19623C12.7575 4.29612 13.0294 4.46425 13.2525 4.68734C13.4756 4.91042 13.6437 5.18234 13.7436 5.4816C13.8435 5.78086 13.8724 6.09925 13.828 6.41161ZM1.31495 6.41161V12.606L2.55159 11.3694C2.62275 11.2976 2.70744 11.2406 2.80075 11.2017C2.89407 11.1628 2.99416 11.1427 3.09526 11.1427C3.19635 11.1427 3.29645 11.1628 3.38976 11.2017C3.48308 11.2406 3.56776 11.2976 3.63893 11.3694L4.35519 12.0856C4.4281 12.1562 4.52558 12.1956 4.62703 12.1956C4.72848 12.1956 4.82596 12.1562 4.89886 12.0856L8.6873 8.2972C8.83312 8.15611 9.02807 8.07723 9.23097 8.07723C9.43388 8.07723 9.62883 8.15611 9.77464 8.2972L12.5361 11.0656V6.41161C12.5361 5.59265 12.3472 5.40452 11.5282 5.40452H2.32204C1.50308 5.40625 1.31495 5.59265 1.31495 6.41161ZM3.90386 8.85813C4.13273 8.85813 4.35223 8.76721 4.51407 8.60537C4.67591 8.44353 4.76683 8.22403 4.76683 7.99516C4.76683 7.76628 4.67591 7.54678 4.51407 7.38495C4.35223 7.22311 4.13273 7.13219 3.90386 7.13219H3.89868C3.66981 7.1331 3.45067 7.2249 3.28948 7.38739C3.12829 7.54987 3.03825 7.76973 3.03916 7.99861C3.04008 8.22748 3.13188 8.44662 3.29436 8.60781C3.45685 8.769 3.67671 8.85904 3.90559 8.85813H3.90386Z" fill="#212529"/>
</svg>

          <div className="border-r border-gray-300 mx-2 h-6"></div>
          <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.17656 18.4286C3.58299 18.4286 0.726562 15.5721 0.726562 11.9786V4.60714C0.726562 2.02714 2.75371 0 5.33371 0C7.91371 0 9.94085 2.02714 9.94085 4.60714V11.9786C9.94085 13.545 8.74299 14.7429 7.17656 14.7429C5.61013 14.7429 4.41228 13.545 4.41228 11.9786V4.60714C4.41228 4.05429 4.78085 3.68571 5.33371 3.68571C5.88656 3.68571 6.25513 4.05429 6.25513 4.60714V11.9786C6.25513 12.5314 6.62371 12.9 7.17656 12.9C7.72942 12.9 8.09799 12.5314 8.09799 11.9786V4.60714C8.09799 3.04071 6.90013 1.84286 5.33371 1.84286C3.76728 1.84286 2.56942 3.04071 2.56942 4.60714V11.9786C2.56942 14.5586 4.59656 16.5857 7.17656 16.5857C9.75656 16.5857 11.7837 14.5586 11.7837 11.9786V4.60714C11.7837 4.05429 12.1523 3.68571 12.7051 3.68571C13.258 3.68571 13.6266 4.05429 13.6266 4.60714V11.9786C13.6266 15.5721 10.7701 18.4286 7.17656 18.4286Z" fill="#495057"/>
</svg>

          <div className="border-r border-gray-300 mx-2 h-6"></div>
        </div>
  <input
    type="text"
    placeholder="Write your comment..."
    className="flex-1 p-2 text-sm lg:text-sm sm:text-xs"
    style={{ boxSizing: 'border-box' }}
  />
  <button
    className="bg-[#22B573] text-white w-[20vw] lg:w-[20vw] sm:w-[10vw] max-w-[97px] h-[6vh] lg:h-[6vh] sm:h-[5vh] max-h-[30px] px-2 py-1 rounded border border-transparent ml-2 text-sm lg:text-sm sm:text-xs"

  >
    Send
  </button>
</div>
    </div>
  );
};

export default Team;
