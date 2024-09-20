'use client'
import React,{useState, useEffect} from 'react';
import Bookmarks from "@/app/Components/MyItems/Bookmarks";
import MessageList from '@/app/Components/Messages/MessageList';
import Chat from '@/app/Components/Messages/Chat';
import { contacts, chatMessages } from '@/app/Other/Message/page';
const BookMarks = () => {
  const [selectedContact, setSelectedContact] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const handleSelectContact = (id: number) => {
    setSelectedContact(id);
  };

  const handleBackButtonClick = () => {
    setSelectedContact(null);
  };

  const selectedContactDetails = contacts.find((contact) => contact.id === selectedContact);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 2400);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
    return(
        <div className="flex h-screen">
        <div className="flex-3 bg-white h-screen rounded-lg">
          <Bookmarks />
        </div>
        
        <div className="flex-1 p-4 ">
      {isMobile && selectedContact !== null ? (
        <div className="relative flex-grow">
          <button
            onClick={handleBackButtonClick}
            className="absolute top-3 left-0 p-0 text-lg ml-0 bg-gray-100 border font-bold"
          >
            &lt;
          </button>
          {selectedContactDetails && (
            <Chat messages={chatMessages[selectedContact] || []} contact={selectedContactDetails} />
          )}
        </div>
      ) : (
       
        <>
          <div className="flex-grow">
            <MessageList contacts={contacts} onSelectContact={handleSelectContact} />
          </div>
          {selectedContact !== null && selectedContactDetails && (
            <div className="flex-grow">
              <Chat messages={chatMessages[selectedContact] || []} contact={selectedContactDetails} />
            </div>
          )}
        </>
      )}
    </div>
      </div>
      
       
    )
}
export default BookMarks;