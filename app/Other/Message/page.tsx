'use client';

import React, { useState } from 'react';
import MessageList from '@/app/Components/Messages/MessageList';
import Chat from '@/app/Components/Messages/Chat';

const Message = () => {
  const [selectedContact, setSelectedContact] = useState<number | null>(null);
  
  const contacts = [
    { id: 1, name: 'Floyd Miles', lastMessage: 'Thanks', avatar: '/MsgImages/avatar1.png' },
    { id: 2, name: 'Arlene McCoy', lastMessage: 'May we go for the lunch?', avatar: '/MsgImages/avatar2.png' },
    { id: 3, name: 'Albert Flores', lastMessage: 'You: Yeah good man👨🏻‍💻', avatar: '/MsgImages/avatar3.png' },
    { id: 4, name: 'Brooklyn Simmons', lastMessage: 'Fine hahah 😂', avatar: '/MsgImages/avatar4.png' },
    { id: 5, name: 'Ronald Richards', lastMessage: 'Good work!!', avatar: '/MsgImages/avatar5.png' },
    { id: 6, name: 'Robert Fox', lastMessage: 'You: Need some help brother!!', avatar: '/MsgImages/avatar6.png' },
    { id: 7, name: 'Courtney Henry', lastMessage: 'You: @Courtney', avatar: '/MsgImages/avatar7.png' },
    { id: 8, name: 'Emily Johnson', lastMessage: 'See you soon!', avatar: '/MsgImages/avatar8.png' }, 
  ];
  
  const chatMessages: { [key: number]: Array<{ sender: string; text: string; timestamp: string }> } =  {
    1: [
      { sender: 'Arlene McCoy', text: 'Lorem ipsum dolor sit amet🤴 consectetur.', timestamp: 'Yesterday, 8:53 PM' },
      { sender: 'Arlene McCoy', text: 'Lorem ipsum dolor sit amet consectetur.', timestamp: 'Yesterday, 9:10 PM' },
      { sender: 'Arlene McCoy', text: 'Lorem ipsum dolor sit amet', timestamp: 'Yesterday, 9:15 PM' },
      { sender: 'me', text: 'Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur.', timestamp: 'Yesterday, 9:20 PM' },
      { sender: 'me', text: 'Lorem ipsum dolor Lorem ipsum dolor sit amet consect.', timestamp: 'Yesterday, 9:25 PM' },
      { sender: 'Arlene McCoy', text: 'Lorem ipsum dolor sit😂 amet consectetur.', timestamp: 'Today, 9:35 PM' },
      { sender: 'Arlene McCoy', text: 'Lorem ipsum dolor sit amet✨ consectetur.', timestamp: 'Today, 9:35 PM' },
    ],
    2: [
      { sender: 'Arlene McCoy', text: 'Lorem ipsum dolor sit amet🤴 consectetur.', timestamp: 'Yesterday, 8:53 PM' },
      { sender: 'Arlene McCoy', text: 'Lorem ipsum dolor sit amet consectetur.', timestamp: 'Yesterday, 9:10 PM' },
      { sender: 'Arlene McCoy', text: 'Lorem ipsum dolor sit amet', timestamp: 'Yesterday, 9:15 PM' },
      { sender: 'me', text: 'Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur.', timestamp: 'Yesterday, 9:20 PM' },
      { sender: 'me', text: 'Lorem ipsum dolor Lorem ipsum dolor sit amet consect.', timestamp: 'Yesterday, 9:25 PM' },
      { sender: 'Arlene McCoy', text: 'Lorem ipsum dolor sit😂 amet consectetur.', timestamp: 'Today, 9:35 PM' },
      { sender: 'Arlene McCoy', text: 'Lorem ipsum dolor sit amet✨ consectetur.', timestamp: 'Today, 9:35 PM' },
    ],
    3: [
      { sender: 'Arlene McCoy', text: 'Lorem ipsum dolor sit amet🤴 consectetur.', timestamp: 'Yesterday, 8:53 PM' },
      { sender: 'Arlene McCoy', text: 'Lorem ipsum dolor sit amet consectetur.', timestamp: 'Yesterday, 9:10 PM' },
      { sender: 'Arlene McCoy', text: 'Lorem ipsum dolor sit amet', timestamp: 'Yesterday, 9:15 PM' },
      { sender: 'me', text: 'Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur.', timestamp: 'Yesterday, 9:20 PM' },
      { sender: 'me', text: 'Lorem ipsum dolor Lorem ipsum dolor sit amet consect.', timestamp: 'Yesterday, 9:25 PM' },
      { sender: 'Arlene McCoy', text: 'Lorem ipsum dolor sit😂 amet consectetur.', timestamp: 'Today, 9:35 PM' },
      { sender: 'Arlene McCoy', text: 'Lorem ipsum dolor sit amet✨ consectetur.', timestamp: 'Today, 9:35 PM' },
    ],
    4: [
      { sender: 'Brooklyn Simmons', text: 'Lorem ipsum dolor sit amet consectetur.', timestamp: 'Yesterday, 6:15 PM' },
      { sender: 'me', text:'Lorem ipsum dolor sit amet consectetur.', timestamp: 'Yesterday, 11:00 PM' },
    ],
    5: [
      { sender: 'Arlene McCoy', text: 'Lorem ipsum dolor sit amet🤴 consectetur.', timestamp: 'Yesterday, 8:53 PM' },
      { sender: 'Arlene McCoy', text: 'Lorem ipsum dolor sit amet consectetur.', timestamp: 'Yesterday, 9:10 PM' },
      { sender: 'Arlene McCoy', text: 'Lorem ipsum dolor sit amet', timestamp: 'Yesterday, 9:15 PM' },
      { sender: 'me', text: 'Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur.', timestamp: 'Yesterday, 9:20 PM' },
      { sender: 'me', text: 'Lorem ipsum dolor Lorem ipsum dolor sit amet consect.', timestamp: 'Yesterday, 9:25 PM' },
      { sender: 'Arlene McCoy', text: 'Lorem ipsum dolor sit😂 amet consectetur.', timestamp: 'Today, 9:35 PM' },
      { sender: 'Arlene McCoy', text: 'Lorem ipsum dolor sit amet✨ consectetur.', timestamp: 'Today, 9:35 PM' },
    ],
    6: [
      { sender: 'Arlene McCoy', text: 'Lorem ipsum dolor sit amet🤴 consectetur.', timestamp: 'Yesterday, 8:53 PM' },
      { sender: 'Arlene McCoy', text: 'Lorem ipsum dolor sit amet consectetur.', timestamp: 'Yesterday, 9:10 PM' },
      { sender: 'Arlene McCoy', text: 'Lorem ipsum dolor sit amet', timestamp: 'Yesterday, 9:15 PM' },
      { sender: 'me', text: 'Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur.', timestamp: 'Yesterday, 9:20 PM' },
      { sender: 'me', text: 'Lorem ipsum dolor Lorem ipsum dolor sit amet consect.', timestamp: 'Yesterday, 9:25 PM' },
      { sender: 'Arlene McCoy', text: 'Lorem ipsum dolor sit😂 amet consectetur.', timestamp: 'Today, 9:35 PM' },
      { sender: 'Arlene McCoy', text: 'Lorem ipsum dolor sit amet✨ consectetur.', timestamp: 'Today, 9:35 PM' },
    ],
    7: [
      { sender: 'Arlene McCoy', text: 'Lorem ipsum dolor sit amet🤴 consectetur.', timestamp: 'Yesterday, 8:53 PM' },
      { sender: 'Arlene McCoy', text: 'Lorem ipsum dolor sit amet consectetur.', timestamp: 'Yesterday, 9:10 PM' },
      { sender: 'Arlene McCoy', text: 'Lorem ipsum dolor sit amet', timestamp: 'Yesterday, 9:15 PM' },
      { sender: 'me', text: 'Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur.', timestamp: 'Yesterday, 9:20 PM' },
      { sender: 'me', text: 'Lorem ipsum dolor Lorem ipsum dolor sit amet consect.', timestamp: 'Yesterday, 9:25 PM' },
      { sender: 'Arlene McCoy', text: 'Lorem ipsum dolor sit😂 amet consectetur.', timestamp: 'Today, 9:35 PM' },
      { sender: 'Arlene McCoy', text: 'Lorem ipsum dolor sit amet✨ consectetur.', timestamp: 'Today, 9:35 PM' },
    ],
    8: [
      { sender: 'Arlene McCoy', text: 'Lorem ipsum dolor sit amet🤴 consectetur.', timestamp: 'Yesterday, 8:53 PM' },
      { sender: 'Arlene McCoy', text: 'Lorem ipsum dolor sit amet consectetur.', timestamp: 'Yesterday, 9:10 PM' },
      { sender: 'Arlene McCoy', text: 'Lorem ipsum dolor sit amet', timestamp: 'Yesterday, 9:15 PM' },
      { sender: 'me', text: 'Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur.', timestamp: 'Yesterday, 9:20 PM' },
      { sender: 'me', text: 'Lorem ipsum dolor Lorem ipsum dolor sit amet consect.', timestamp: 'Yesterday, 9:25 PM' },
      { sender: 'Arlene McCoy', text: 'Lorem ipsum dolor sit😂 amet consectetur.', timestamp: 'Today, 9:35 PM' },
      { sender: 'Arlene McCoy', text: 'Lorem ipsum dolor sit amet✨ consectetur.', timestamp: 'Today, 9:35 PM' },
    ],
  };
  
  const handleSelectContact = (id: number) => {
    setSelectedContact(id);
  };
  
  const selectedContactDetails = contacts.find(contact => contact.id === selectedContact);

  return (
    <div className="flex max-h-screen lg:max-h-screen sm:max-h-screen overflow-y-auto max-w-screen overflow-x-auto lg:gap-5 sm:gap-2">
      <MessageList contacts={contacts} onSelectContact={handleSelectContact} />
      {selectedContact !== null && selectedContactDetails && (
        <Chat 
          messages={chatMessages[selectedContact] || []}
          contact={selectedContactDetails} 
        />
      )}
    </div>
  );
};

export default Message;
