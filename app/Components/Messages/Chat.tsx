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
    <div className=" w-[380px] lg:w-[380px] sm:w-[250px] mr-2 lg:mr-2 md:mr-2 sm:mr-1 flex-1 bg-white flex flex-col border border-gray-200 shadow-[0px_2px_4px_0px_#00000013] rounded-[10px] ">
      <div className="lg:h-[10vh] sm:h-[5vh] max-h-[76px] mb-4 border-b border-gray-200 flex items-center px-4 gap-4">
        <div className="flex items-center gap-4 flex-1">
          <Image
            src={contact.avatar}
            alt={`${contact.name}'s avatar`}
            width={40}
            height={40}
            className="w-10 h-10 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
          />
          <div className="flex flex-col">
            <span className="font-semibold lg:text-md sm:text-xs">{contact.name}</span>
            <div className="flex items-center lg:mt-1 sm:mt-0">
            <div className="w-2 h-2 bg-[#198754] rounded-full flex items-center justify-center"></div>
              <span className="lg:text-xs sm:text-[0.7rem] text-gray-500 ml-1 ">Online</span>
            </div>
          </div>
        </div>
        <div className="ml-auto relative">
        <svg width="4" height="16" viewBox="0 0 5 18"  onClick={togglePopup} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.49982 6.90839C1.34943 6.90839 0.408203 7.84961 0.408203 9C0.408203 10.1504 1.34943 11.0916 2.49982 11.0916C3.6502 11.0916 4.59143 10.1504 4.59143 9C4.59143 7.84961 3.6502 6.90839 2.49982 6.90839ZM2.49982 0.633545C1.34943 0.633545 0.408203 1.57477 0.408203 2.72516C0.408203 3.87555 1.34943 4.81677 2.49982 4.81677C3.6502 4.81677 4.59143 3.87555 4.59143 2.72516C4.59143 1.57477 3.6502 0.633545 2.49982 0.633545ZM2.49982 13.1832C1.34943 13.1832 0.408203 14.1245 0.408203 15.2748C0.408203 16.4252 1.34943 17.3665 2.49982 17.3665C3.6502 17.3665 4.59143 16.4252 4.59143 15.2748C4.59143 14.1245 3.6502 13.1832 2.49982 13.1832Z" fill="#495057"/>
          </svg>
          {isPopupVisible && (
            <div className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-lg border border-gray-200 w-[160px]">
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm lg:text-sm sm:text-xs">
                Info
              </button>
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm lg:text-sm sm:text-xs">
                Mute
              </button>
              <button className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-100 text-sm lg:text-sm sm:text-xs">
                Delete
              </button>
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm lg:text-sm sm:text-xs">
                Archive
              </button>
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm lg:text-sm sm:text-xs">
                Report/Block
              </button>
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
                            <div className="text-gray-300 lg:text-xs mr-2 sm:text-[0.60rem] flex items-center">
                              {time}
                            </div>
                            <div className={`inline-flex items-center p-2 rounded-lg ${isMe ? 'bg-[#22B57333] text-[#198754]' : 'bg-gray-200'} lg:text-sm sm:text-xs`}>
                              {message.text}
                            </div>
                          </>
                        ) : (
                          <>
                            <div className={`inline-flex items-center p-2 rounded-lg ${isMe ? 'bg-[#22B57333] text-[#198754]' : 'bg-gray-200'} lg:text-sm sm:text-xs`}>
                              {message.text}
                            </div>
                            <div className="text-gray-300 lg:text-xs ml-2 sm:text-[0.60rem] flex items-center">
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
            <p className="text-center text-gray-600 mt-2 text-sm lg:text-sm sm:text-xs">
              Brooklyn just wants to chat with you. Evaluate and decide on requests by either approving or rejecting them.
            </p>
            <div className="flex gap-4 mt-4">
              <button className="bg-white text-red-500 border border-red-500 px-3 py-1.5 rounded text-sm lg:text-sm sm:text-xs flex items-center gap-2 hover:bg-red-100">
              <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.183114 0.682993C0.300318 0.565823 0.459261 0.500001 0.624989 0.500001C0.790716 0.500001 0.949659 0.565823 1.06686 0.682993L4.99999 4.61612L8.93311 0.682993C8.99077 0.623299 9.05973 0.575685 9.13599 0.542929C9.21224 0.510174 9.29425 0.492932 9.37724 0.492211C9.46023 0.49149 9.54252 0.507304 9.61934 0.538729C9.69615 0.570155 9.76593 0.616563 9.82461 0.675246C9.88329 0.733929 9.9297 0.803711 9.96113 0.880521C9.99255 0.957332 10.0084 1.03963 10.0076 1.12262C10.0069 1.20561 9.98968 1.28762 9.95693 1.36387C9.92417 1.44012 9.87656 1.50909 9.81686 1.56674L5.88374 5.49987L9.81686 9.43299C9.93071 9.55087 9.99371 9.70875 9.99228 9.87262C9.99086 10.0365 9.92513 10.1932 9.80925 10.3091C9.69337 10.425 9.53661 10.4907 9.37274 10.4922C9.20887 10.4936 9.05099 10.4306 8.93311 10.3167L4.99999 6.38362L1.06686 10.3167C0.948987 10.4306 0.791111 10.4936 0.627238 10.4922C0.463365 10.4907 0.306607 10.425 0.190727 10.3091C0.0748469 10.1932 0.00911634 10.0365 0.00769233 9.87262C0.00626832 9.70875 0.0692648 9.55087 0.183114 9.43299L4.11624 5.49987L0.183114 1.56674C0.0659442 1.44954 0.00012207 1.2906 0.00012207 1.12487C0.00012207 0.95914 0.0659442 0.800197 0.183114 0.682993Z" fill="#DC3545"/>
</svg>

                Reject
              </button>
              <button className="bg-white text-[#22B573] border border-[#22B573] px-3 py-1.5 rounded text-sm lg:text-sm sm:text-xs flex items-center gap-2 hover:bg-[#e6f6f0]">
              <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3243 0.699426C12.09 0.433525 11.7101 0.433525 11.4757 0.699426L4.28737 8.85645L1.52428 5.72105C1.28997 5.45515 0.910097 5.45518 0.675746 5.72105C0.441418 5.98693 0.441418 6.41799 0.675746 6.68389L3.8631 10.3007C4.09734 10.5665 4.47749 10.5664 4.71163 10.3007L12.3243 1.66229C12.5586 1.39641 12.5586 0.965328 12.3243 0.699426Z" fill="#22B573"/>
</svg>

                Accept
              </button>
            </div>
          </div>
        )}
        {contact.id === 2 && (
    <div className="mt-4 flex items-center text-xs" style={{ color: '#22B573' }}>
      <svg width="28" height="28" className='h-6 w-6 lg:h-6 lg:w-6 sm:w-4 sm:h-4' viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M13.9957 0.0927757C16.0886 0.0915867 18.1548 0.562778 20.0402 1.47123C21.9258 2.37972 23.582 3.7021 24.8854 5.33976C26.1886 6.97742 27.1056 8.88814 27.5676 10.9295C28.0298 12.9708 28.025 15.0902 27.5542 17.1295C27.0832 19.1688 26.158 21.0755 24.8474 22.7075C23.537 24.3395 21.875 25.6545 19.9855 26.5549C18.096 27.4551 16.0277 27.9173 13.9348 27.9069C11.9529 27.8971 9.99742 27.4639 8.19878 26.6377L1.26682 27.8911C0.912648 27.9551 0.551384 27.8239 0.320878 27.5475C0.0903729 27.2711 0.0261889 26.8921 0.152818 26.5553L2.14128 21.2649C0.920582 19.2722 0.220138 17.0015 0.108659 14.6618C-0.011067 12.149 0.55301 9.65086 1.74081 7.43334C2.92862 5.21582 4.69566 3.362 6.85374 2.06934C9.01172 0.776714 11.4802 0.0936139 13.9957 0.0927757ZM7.55244 13.9968L7.55336 13.9999L7.55244 14.003L7.55132 14.005L7.54936 14.0061L7.54626 14.007L7.54318 14.0061L7.54122 14.005L7.5401 14.003L7.53918 13.9999L7.5401 13.9968L7.54122 13.9949L7.54318 13.9937L7.54626 13.9928L7.54936 13.9937L7.55132 13.9949L7.55244 13.9968ZM7.54626 12.007C6.44564 12.007 5.55342 12.8993 5.55342 13.9999C5.55342 15.1005 6.44564 15.9928 7.54626 15.9928C8.6469 15.9928 9.53912 15.1005 9.53912 13.9999C9.53912 12.8993 8.6469 12.007 7.54626 12.007ZM14.0069 13.9999L14.006 13.9968L14.0049 13.9949L14.0029 13.9937L13.9998 13.9928L13.9967 13.9937L13.9948 13.9949L13.9937 13.9968L13.9927 13.9999L13.9937 14.003L13.9948 14.005L13.9967 14.0061L13.9998 14.007L14.0029 14.0061L14.0049 14.005L14.006 14.003L14.0069 13.9999ZM12.007 13.9999C12.007 12.8993 12.8992 12.007 13.9998 12.007C15.1005 12.007 15.9927 12.8993 15.9927 13.9999C15.9927 15.1005 15.1005 15.9928 13.9998 15.9928C12.8992 15.9928 12.007 15.1005 12.007 13.9999ZM20.4596 13.9968L20.4606 13.9999L20.4596 14.003L20.4584 14.005L20.4566 14.0061L20.4534 14.007L20.4504 14.0061L20.4484 14.005L20.4472 14.003L20.4464 13.9999L20.4472 13.9968L20.4484 13.9949L20.4504 13.9937L20.4534 13.9928L20.4566 13.9937L20.4584 13.9949L20.4596 13.9968ZM20.4534 12.007C19.3528 12.007 18.4605 12.8993 18.4605 13.9999C18.4605 15.1005 19.3528 15.9928 20.4534 15.9928C21.554 15.9928 22.4462 15.1005 22.4462 13.9999C22.4462 12.8993 21.554 12.007 20.4534 12.007Z" fill="#22B573"/>
</svg>

      <span className="ml-2">{contact.name.split(' ')[0]} is typing...</span>
    </div>
  )}
      </div>
      <div className="border-t mt-4 px-4 lg:px-4 sm:px-2 py-2 lg:py-2 sm:py-1 flex items-center border border-gray-300 rounded m-5 lg:m-5 sm:m-2">
        <div className="flex items-center">
        <svg width="18" height="19" className="w-5 h-5 lg:w-5 lg:h-5 sm:w-3 sm:h-3" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M18 9.21387C18 14.1844 13.9705 18.2139 9 18.2139C4.02943 18.2139 0 14.1844 0 9.21387C0 4.2433 4.02943 0.213867 9 0.213867C13.9705 0.213867 18 4.2433 18 9.21387ZM7.2 6.51387C7.2 6.01682 6.79705 5.61387 6.3 5.61387C5.80295 5.61387 5.4 6.01682 5.4 6.51387V7.41387C5.4 7.91094 5.80295 8.31387 6.3 8.31387C6.79705 8.31387 7.2 7.91094 7.2 7.41387V6.51387ZM11.7 5.61387C12.1971 5.61387 12.6 6.01682 12.6 6.51387V7.41387C12.6 7.91094 12.1971 8.31387 11.7 8.31387C11.2029 8.31387 10.8 7.91094 10.8 7.41387V6.51387C10.8 6.01682 11.2029 5.61387 11.7 5.61387ZM4.71335 11.2389C4.52695 10.916 4.11413 10.8054 3.79128 10.9918C3.46843 11.1782 3.35781 11.591 3.54421 11.9139C4.09715 12.8716 4.89244 13.6669 5.85017 14.2198C6.80789 14.7728 7.89426 15.0639 9.00018 15.0639C10.106 15.0639 11.1925 14.7728 12.1502 14.2198C13.1079 13.6669 13.9032 12.8716 14.4562 11.9139C14.6426 11.591 14.5319 11.1782 14.209 10.9918C13.8862 10.8054 13.4734 10.916 13.287 11.2389C12.8525 11.9914 12.2277 12.6162 11.4752 13.0507C10.7227 13.4852 9.86904 13.7139 9.00018 13.7139C8.13123 13.7139 7.27767 13.4852 6.52517 13.0507C5.77267 12.6162 5.14779 11.9914 4.71335 11.2389Z" fill="#212529"/>
</svg>

          <div className="border-r border-gray-300 mx-2 lg:mx-2 sm:mx-1 h-6 lg:h-6 sm:h-4"></div>
          <svg width="18" height="17" className="w-5 h-5 lg:w-5 lg:h-5 sm:w-3 sm:h-3" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.6665 4.63648L16.6309 12.0408C16.6051 12.432 16.4948 12.8129 16.3075 13.1574C16.1202 13.5018 15.8605 13.8016 15.5462 14.0359C15.5066 14.0634 15.4604 14.0797 15.4124 14.0831C15.3644 14.0865 15.3163 14.077 15.2732 14.0554C15.2302 14.0339 15.1937 14.0012 15.1676 13.9607C15.1416 13.9202 15.1268 13.8735 15.1251 13.8254V6.41161C15.1698 5.92821 15.1074 5.44091 14.9424 4.98435C14.7774 4.52779 14.5138 4.1132 14.1704 3.77005C13.827 3.42691 13.4123 3.16364 12.9556 2.99898C12.4989 2.83431 12.0116 2.7723 11.5282 2.81734H3.40593C3.14703 2.81734 3.14099 2.58434 3.15912 2.48078C3.23197 1.77878 3.57635 1.13307 4.11874 0.681486C4.42497 0.476226 4.76921 0.33436 5.13114 0.264256C5.49308 0.194151 5.86539 0.197227 6.22611 0.273301L15.3399 1.5505C15.7088 1.57733 16.0686 1.67774 16.3981 1.84581C16.7276 2.01388 17.0201 2.24621 17.2583 2.5291C17.464 2.83515 17.6061 3.17938 17.6762 3.54138C17.7463 3.90338 17.743 4.27578 17.6665 4.63648ZM13.828 6.41161V13.8918C13.8725 14.2043 13.8437 14.5228 13.7439 14.8222C13.644 15.1216 13.4759 15.3937 13.2529 15.6169C13.0298 15.8402 12.7578 16.0085 12.4585 16.1085C12.1592 16.2086 11.8407 16.2376 11.5282 16.1934H2.32204C2.00938 16.2381 1.69061 16.2094 1.39098 16.1095C1.09135 16.0097 0.819079 15.8414 0.595751 15.6181C0.372423 15.3948 0.20417 15.1225 0.104322 14.8229C0.00447339 14.5233 -0.0242268 14.2045 0.0204949 13.8918V6.41161C-0.0239291 6.09909 0.00499399 5.78052 0.104975 5.48111C0.204956 5.1817 0.373252 4.90967 0.596542 4.68654C0.819832 4.46342 1.09199 4.29533 1.39147 4.19557C1.69096 4.09582 2.00955 4.06713 2.32204 4.11179H11.5282C11.8406 4.06743 12.1589 4.09634 12.4582 4.19623C12.7575 4.29612 13.0294 4.46425 13.2525 4.68734C13.4756 4.91042 13.6437 5.18234 13.7436 5.4816C13.8435 5.78086 13.8724 6.09925 13.828 6.41161ZM1.31495 6.41161V12.606L2.55159 11.3694C2.62275 11.2976 2.70744 11.2406 2.80075 11.2017C2.89407 11.1628 2.99416 11.1427 3.09526 11.1427C3.19635 11.1427 3.29645 11.1628 3.38976 11.2017C3.48308 11.2406 3.56776 11.2976 3.63893 11.3694L4.35519 12.0856C4.4281 12.1562 4.52558 12.1956 4.62703 12.1956C4.72848 12.1956 4.82596 12.1562 4.89886 12.0856L8.6873 8.2972C8.83312 8.15611 9.02807 8.07723 9.23097 8.07723C9.43388 8.07723 9.62883 8.15611 9.77464 8.2972L12.5361 11.0656V6.41161C12.5361 5.59265 12.3472 5.40452 11.5282 5.40452H2.32204C1.50308 5.40625 1.31495 5.59265 1.31495 6.41161ZM3.90386 8.85813C4.13273 8.85813 4.35223 8.76721 4.51407 8.60537C4.67591 8.44353 4.76683 8.22403 4.76683 7.99516C4.76683 7.76628 4.67591 7.54678 4.51407 7.38495C4.35223 7.22311 4.13273 7.13219 3.90386 7.13219H3.89868C3.66981 7.1331 3.45067 7.2249 3.28948 7.38739C3.12829 7.54987 3.03825 7.76973 3.03916 7.99861C3.04008 8.22748 3.13188 8.44662 3.29436 8.60781C3.45685 8.769 3.67671 8.85904 3.90559 8.85813H3.90386Z" fill="#212529"/>
</svg>

          <div className="border-r border-gray-300 mx-2 lg:mx-2 sm:mx-1 h-6 lg:h-6 sm:h-4"></div>
          <svg width="14" height="19" className="w-4 h-7 lg:w-4 lg:h-7 sm:w-2 sm:h-3.5" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.17656 18.4286C3.58299 18.4286 0.726562 15.5721 0.726562 11.9786V4.60714C0.726562 2.02714 2.75371 0 5.33371 0C7.91371 0 9.94085 2.02714 9.94085 4.60714V11.9786C9.94085 13.545 8.74299 14.7429 7.17656 14.7429C5.61013 14.7429 4.41228 13.545 4.41228 11.9786V4.60714C4.41228 4.05429 4.78085 3.68571 5.33371 3.68571C5.88656 3.68571 6.25513 4.05429 6.25513 4.60714V11.9786C6.25513 12.5314 6.62371 12.9 7.17656 12.9C7.72942 12.9 8.09799 12.5314 8.09799 11.9786V4.60714C8.09799 3.04071 6.90013 1.84286 5.33371 1.84286C3.76728 1.84286 2.56942 3.04071 2.56942 4.60714V11.9786C2.56942 14.5586 4.59656 16.5857 7.17656 16.5857C9.75656 16.5857 11.7837 14.5586 11.7837 11.9786V4.60714C11.7837 4.05429 12.1523 3.68571 12.7051 3.68571C13.258 3.68571 13.6266 4.05429 13.6266 4.60714V11.9786C13.6266 15.5721 10.7701 18.4286 7.17656 18.4286Z" fill="#495057"/>
</svg>

          <div className="border-r border-gray-300 mx-2 lg:mx-2 sm:mx-1 h-6 lg:h-6 sm:h-4"></div>
        </div>
  <input
    type="text"
    placeholder="Write your comment..."
    className="flex-1 p-2 sm:p-0 text-sm lg:text-sm sm:text-xs w-full"
    style={{ boxSizing: 'border-box' }}
  />
  <button
    className="bg-[#22B573] text-white w-[20vw] lg:w-[20vw] sm:w-[7vw] max-w-[97px] h-[6vh] lg:h-[6vh] sm:h-[4vh] max-h-[30px] px-2 lg:px-2 sm:px-1 py-1 rounded border border-transparent ml-2 lg:ml-2 sm:ml-0 text-sm lg:text-sm sm:text-xs"

  >
    Send
  </button>
</div>

    </div>
  );
};

export default Chat;
