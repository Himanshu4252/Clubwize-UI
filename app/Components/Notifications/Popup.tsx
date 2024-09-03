import React, { useState } from 'react';
import Image from 'next/image';

interface PopupProps {
  isVisible: boolean;
  onClose: () => void;
}

interface Notification {
  id: number;
  user: string;
  action: string;
  node: string;
  group: string;
  time: string;
  profile: string;
  nodeImage: string;
  read: boolean;
}

interface Notifications {
  [key: string]: Notification[];
}

const Popup: React.FC<PopupProps> = ({ isVisible, onClose }) => {
  const [activeTab, setActiveTab] = useState<string>('All');

  if (!isVisible) return null;

  const notifications: Notifications = {
    All: [
      { id: 1, user: 'Cameron Williamson', action: 'is like your comment.', node: 'RulesDog', group: 'Rules', time: '3 hrs ago', profile: '/NotificationsImg/allProf1.png', nodeImage: '/NotificationsImg/node1.png', read: true },
      { id: 2, user: 'Jane Cooper', action: 'is Mentioned you in Walt Disney group chat.', node: 'RulesDog', group: 'Funny', time: '3 hrs ago', profile: '/NotificationsImg/allProf2.png', nodeImage: '/NotificationsImg/node1.png', read: true },
      { id: 3, user: 'Robert Fox', action: 'is share your post to 652 people.', node: 'RulesDog', group: 'General', time: '3 hrs ago', profile: '/NotificationsImg/allProf3.png', nodeImage: '/NotificationsImg/node1.png', read: true },
      { id: 4, user: 'Ronald Richards', action: 'is upload a new post relevant your interest.', node: 'RulesDog', group: 'Market place', time: '3 hrs ago', profile: '/NotificationsImg/allProf4.png', nodeImage: '/NotificationsImg/node2.png', read: true },
      { id: 5, user: 'Brooklyn Simmons', action: 'is upload a new post.', node: 'RulesDog', group: 'Developers', time: '3 hrs ago', profile: '/NotificationsImg/allProf5.png', nodeImage: '/NotificationsImg/node1.png', read: true },
      { id: 6, user: 'Robert Fox', action: 'is like invite you to join Lehner node.', node: 'RulesDog', group: 'Rules', time: '3 hrs ago', profile: '/NotificationsImg/allProf6.png', nodeImage: '/NotificationsImg/node2.png', read: true },
      { id: 7, user: 'Ronald Richards', action: 'is upload a new post relevant your interest.', node: 'RulesDog', group: 'Market place', time: '3 hrs ago', profile: '/NotificationsImg/allProf7.png', nodeImage: '/NotificationsImg/node1.png', read: true },
      { id: 8, user: 'Brooklyn Simmons', action: 'is upload a new post.', node: 'RulesDog', group: 'Funny', time: '3 hrs ago', profile: '/NotificationsImg/allProf8.png', nodeImage: '/NotificationsImg/node2.png', read: true },
    ],
    Comment: [
      { id: 1, user: 'Cameron Williamson', action: 'is like your comment.', node: 'RulesDog • President of sale', group: 'General', time: '3 hrs ago', profile: '/NotificationsImg/comProf1.png', nodeImage: '/NotificationsImg/node1.png', read: true },
      { id: 2, user: 'Jane Cooper', action: 'is comment on your post.', node: 'RulesDog', group: 'Rules', time: '3 hrs ago', profile: '/NotificationsImg/comProf2.png', nodeImage: '/NotificationsImg/node1.png', read: false },
      { id: 3, user: 'Robert Fox', action: 'is like your comment.', node: 'RulesDog', group: 'Rules', time: '3 hrs ago', profile: '/NotificationsImg/comProf3.png', nodeImage: '/NotificationsImg/node1.png', read: false },
      { id: 4, user: 'Ronald Richards', action: 'is like your comment & reply your comment.', node: 'RulesDog', group: 'Rules', time: '3 hrs ago', profile: '/NotificationsImg/comProf4.png', nodeImage: '/NotificationsImg/node1.png', read: true },
      { id: 5, user: 'Brooklyn Simmons', action: 'is like your comment.', node: 'RulesDog', group: 'Rules', time: '3 hrs ago', profile: '/NotificationsImg/comProf5.png', nodeImage: '/NotificationsImg/node1.png', read: true },
      { id: 6, user: 'Robert Fox', action: 'is replay your comment.', node: 'RulesDog', group: 'Rules', time: '3 hrs ago', profile: '/NotificationsImg/comProf6.png', nodeImage: '/NotificationsImg/node1.png', read: true },
      { id: 7, user: 'Ronald Richards', action: 'is like your comment.', node: 'RulesDog', group: 'Rules', time: '3 hrs ago', profile: '/NotificationsImg/comProf7.png', nodeImage: '/NotificationsImg/node1.png', read: true },
    ],
    '@Mentioned': [
      { id: 1, user: 'Jane Cooper', action: 'is Mentioned you in their post.', node: 'RulesDog', group: 'Market place', time: '3 hrs ago', profile: '/NotificationsImg/mentProf1.png', nodeImage: '/NotificationsImg/node1.png', read: true },
      { id: 2, user: 'Robert Fox', action: 'is Mentioned you in Walt Disney chapter.', node: 'RulesDog', group: 'Funny', time: '3 hrs ago', profile: '/NotificationsImg/mentProf2.png', nodeImage: '/NotificationsImg/node2.png', read: true },
      { id: 3, user: 'Jane Cooper', action: 'is Mentioned you in Walt Disney group.', node: 'RulesDog', group: 'General', time: '3 hrs ago', profile: '/NotificationsImg/mentProf3.png', nodeImage: '/NotificationsImg/node1.png', read: true },
      { id: 4, user: 'Ronald Richards', action: 'is Mentioned you in their comment.', node: 'RulesDog', group: 'Market place', time: '3 hrs ago', profile: '/NotificationsImg/mentProf4.png', nodeImage: '/NotificationsImg/node2.png', read: true },
      { id: 5, user: 'Ronald Richards', action: 'is Mentioned you in Walt Disney group.', node: 'RulesDog', group: 'Rules', time: '3 hrs ago', profile: '/NotificationsImg/mentProf5.png', nodeImage: '/NotificationsImg/node1.png', read: true },
    ],
    Invite: [
      { id: 1, user: 'Robert Fox', action: 'is inviting you to join Lehner node.', node: '', group: '', time: '3 hrs ago', profile: '/NotificationsImg/invProf1.png', nodeImage: '/NotificationsImg/node1.png', read: true },
      { id: 2, user: 'Jane Cooper', action: 'is inviting you to join Lehner node.', node: '', group: '', time: '3 hrs ago', profile: '/NotificationsImg/invProf2.png', nodeImage: '/NotificationsImg/node1.png', read: true },
      { id: 3, user: 'Robert Fox', action: 'is inviting you to join Lehner node.', node: '', group: '', time: '3 hrs ago', profile: '/NotificationsImg/invProf3.png', nodeImage: '/NotificationsImg/node1.png', read: true },
      { id: 4, user: 'Ronald Richards', action: 'is inviting you to join Lehner node.', node: '', group: '', time: '3 hrs ago', profile: '/NotificationsImg/invProf4.png', nodeImage: '/NotificationsImg/node1.png', read: true },
      { id: 5, user: 'Brooklyn Simmons', action: 'is inviting you to join Lehner node.', node: '', group: '', time: '3 hrs ago', profile: '/NotificationsImg/invProf5.png', nodeImage: '/NotificationsImg/node1.png', read: true },
      { id: 6, user: 'Robert Fox', action: 'is inviting you to join Lehner node.', node: '', group: '', time: '3 hrs ago', profile: '/NotificationsImg/invProf6.png', nodeImage: '/NotificationsImg/node1.png', read: true },
    ],
    'Message Request': [
      { id: 1, user: 'Robert Fox', action: 'wants to message you.', node: '', group: '', time: '3 hrs ago', profile: '/NotificationsImg/mentProf1.png', nodeImage: '/NotificationsImg/node1.png', read: true },
      { id: 2, user: 'Jane Cooper', action: 'wants to message you.', node: '', group: '', time: '3 hrs ago', profile: '/NotificationsImg/mentProf2.png', nodeImage: '/NotificationsImg/node1.png', read: true },
      { id: 3, user: 'Robert Fox', action: 'wants to message you.', node: '', group: '', time: '3 hrs ago', profile: '/NotificationsImg/mentProf3.png', nodeImage: '/NotificationsImg/node1.png', read: true },
      { id: 4, user: 'Ronald Richards', action: 'wants to message you.', node: '', group: '', time: '3 hrs ago', profile: '/NotificationsImg/mentProf4.png', nodeImage: '/NotificationsImg/node1.png', read: true },
      { id: 5, user: 'Brooklyn Simmons', action: 'wants to message you.', node: '', group: '', time: '3 hrs ago', profile: '/NotificationsImg/mentProf5.png', nodeImage: '/NotificationsImg/node1.png', read: true },
      { id: 6, user: 'Robert Fox', action: 'wants to message you.', node: '', group: '', time: '3 hrs ago', profile: '/NotificationsImg/invProf6.png', nodeImage: '/NotificationsImg/node1.png', read: true },
    ],
  };

  const filteredNotifications = notifications[activeTab];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 flex items-start justify-end z-50">
      <div className="bg-white relative mt-24 mr-4 sm:mr-6 md:mr-8 lg:mr-12 xl:mr-16 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 max-w-screen-sm rounded-t-lg shadow-lg">
        <div className="border-b ml-5 border-gray-300">
          <div className="flex flex-wrap space-x-4 sm:space-x-2 overflow-x-auto text-sm">
            {['All', 'Comment', 'Invite', '@Mentioned', 'Message Request'].map((tab) => (
              <div
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer p-2 pt-4 text-base ${activeTab === tab ? 'text-green-500 border-b-4 border-green-500' : 'text-gray-500'}`}
              >
                {tab}
              </div>
            ))}
          </div>
          <button className="absolute top-0 right-2 text-black text-[2rem]" onClick={onClose}>
            &times;
          </button>
        </div>
        <div>
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 pl-5 pr-0 border-b border-gray-200 flex items-start space-x-4 hover:bg-[#F8F9FA] ${
                  notification.read ? '' : 'bg-[#CEEFE0] border-[#A3CFBB] hover:bg-[#A3CFBB]'
                }`}
              >
                <Image src={notification.profile} alt={`${notification.user} profile`} width={40} height={40} />
                <div className="flex flex-grow items-center">
                  <div className="flex-1">
                    <p>
                      <span className="font-bold">{notification.user} </span>
                      <span className="text-gray-400">{notification.action}</span>
                    </p>
                    <p className="text-gray-500 text-sm flex items-center space-x-1">
                      {(activeTab !== 'Invite' && activeTab !== 'Message Request') && (
                        <>
                          <span className="text-[#22B573] underline text-sm flex items-center space-x-1 gap-1 mr-1">
                            <Image src={notification.nodeImage} alt={notification.node} width={15} height={15} />
                            {notification.node}
                          </span>
                          • <span className="text-[#22B573] underline text-sm pr-1">{notification.group}</span>
                          <span className="pr-1">•</span>
                        </>
                      )}
                      {notification.time}
                    </p>
                  </div>
                  {!notification.read && (
                    <div className="w-2 h-2 bg-[#22B573] mr-10 rounded-full"></div>
                  )}
                  {(activeTab === 'Invite' || activeTab === 'Message Request') && (
                    <div className="flex space-x-4 mr-4">
                      <button className="w-6 h-6 border-2 border-red-500 rounded-md flex items-center justify-center">
                        <span className="text-red-500 text-lg">&times;</span>
                      </button>
                      <button className="w-6 h-6 border-2 border-green-500 rounded-md flex items-center justify-center">
                        <span className="text-green-500 text-sm">✓</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No notifications available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
