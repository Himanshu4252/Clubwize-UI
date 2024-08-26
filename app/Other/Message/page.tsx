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
      { sender: 'Floyd Miles', text: 'Lorem ipsum dolor sit amet consectetur.', timestamp: 'Yesterday, 8:53 PM' },
      { sender: 'me', text: 'Lorem ipsum dolor sit amet consectetur.', timestamp: 'Today, 9:12 PM' },
    ],
    2: [
      { sender: 'Arlene McCoy', text: 'Lorem ipsum dolor sit amet consectetur.', timestamp: 'Yesterday, 8:53 PM' },
      { sender: 'me', text: 'Lorem ipsum dolor sit amet consectetur.', timestamp: 'Today, 9:12 PM' },
    ],
    3: [
      { sender: 'Albert Flores', text: 'Lorem ipsum dolor sit amet consectetur.', timestamp: 'Yesterday, 7:20 PM' },
      { sender: 'me', text: 'Lorem ipsum dolor sit amet consectetur.', timestamp: 'Today, 10:05 PM' },
    ],
    4: [
      { sender: 'Brooklyn Simmons', text: 'Lorem ipsum dolor sit amet consectetur.', timestamp: 'Yesterday, 6:15 PM' },
      { sender: 'me', text:'Lorem ipsum dolor sit amet consectetur.', timestamp: 'Today, 11:00 PM' },
    ],
    5: [
      { sender: 'Ronald Richards', text: 'Lorem ipsum dolor sit amet consectetur.', timestamp: 'Yesterday, 5:00 PM' },
      { sender: 'me', text: 'Lorem ipsum dolor sit amet consectetur.', timestamp: 'Today, 11:30 PM' },
    ],
    6: [
      { sender: 'Robert Fox', text:'Lorem ipsum dolor sit amet consectetur.', timestamp: 'Yesterday, 4:45 PM' },
      { sender: 'me', text: 'Lorem ipsum dolor sit amet consectetur.', timestamp: 'Today, 12:00 AM' },
    ],
    7: [
      { sender: 'Courtney Henry', text: 'Lorem ipsum dolor sit amet consectetur.', timestamp: 'Yesterday, 3:30 PM' },
      { sender: 'me', text: 'Lorem ipsum dolor sit amet consectetur.', timestamp: 'Today, 1:00 AM' },
    ],
    8: [
      { sender: 'Emily Johnson', text: 'Lorem ipsum dolor sit amet consectetur.', timestamp: 'Yesterday, 2:00 PM' },
      { sender: 'me', text: 'Lorem ipsum dolor sit amet consectetur.', timestamp: 'Today, 2:15 AM' },
    ],
  };
  
  const handleSelectContact = (id: number) => {
    setSelectedContact(id);
  };
  
  const selectedContactDetails = contacts.find(contact => contact.id === selectedContact);

  return (
    <div className="flex h-screen gap-5">
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
