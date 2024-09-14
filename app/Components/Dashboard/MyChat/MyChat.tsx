import React from "react";

const MyChat = () => {
    const chatData = [
        {
          name: "Courtney Henry",
          message: null, // Or any other relevant information
          unred: '15+'
        },
        {
          name: "Darrell Steward",
          message: "Thanks @john",
          unred: '8+'
        },
        {
          name: "Bessie Cooper",
          message: "Me: like your idea",
          unred: ''
        },
        {
            name: "Savannah Nguyen",
            message: "Barely has change the group icon.",
            unred: ''
        },
        {
            name: "Jerome Bell",
            message: "Cameron:Shall we now?",
            unred: ''
        },
        {
            name: "Annette Black",
            message: "Me: like your idea",
            unred: ''
        },

        // ... other users and their messages
      ];

  return (
    <div className="flex flex-col w-full bg-white rounded-lg shadow-md">
      {/* Header */}
      <div className="inline-flex p-6 justify-between items-center">
        <h4 className="text-lg font-medium"> My Chat</h4>
        <span className="border rounded-lg px-4 py-1 text-sm">+ Invite</span>
      </div>

      <hr />

      {/* Chat */}
      <div className="flex flex-col gap-2 mt-4  ">
        {chatData.map((chat, index) => (
            <>
         <div key={index} className="inline-flex items-center justify-between w-full px-6 ">
         <div className="inline-flex gap-2">
         <span className="rounded-md w-12 h-12 bg-gray-500"></span>
         <div className="flex flex-col">
             <h5 className="font-medium">{chat.name}</h5>
             <p className="text-sm">{chat.message}</p>
         </div>
         </div>
         
         <div className="inline-flex justify-center items-center gap-4">
            {chat.unred && 
            <span className="rounded-full text-sm p-1 px-2 bg-green-500 text-white">{chat.unred}</span>
            }
         <svg width="5" height="17" viewBox="0 0 5 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.09161 6.27484C0.941226 6.27484 0 7.21607 0 8.36646C0 9.51684 0.941226 10.4581 2.09161 10.4581C3.242 10.4581 4.18323 9.51684 4.18323 8.36646C4.18323 7.21607 3.242 6.27484 2.09161 6.27484ZM2.09161 0C0.941226 0 0 0.941226 0 2.09161C0 3.242 0.941226 4.18323 2.09161 4.18323C3.242 4.18323 4.18323 3.242 4.18323 2.09161C4.18323 0.941226 3.242 0 2.09161 0ZM2.09161 12.5497C0.941226 12.5497 0 13.4909 0 14.6413C0 15.7917 0.941226 16.7329 2.09161 16.7329C3.242 16.7329 4.18323 15.7917 4.18323 14.6413C4.18323 13.4909 3.242 12.5497 2.09161 12.5497Z" fill="#212529"/>
</svg>

         
         </div>
     </div>
        <hr /></>
        ))}


        {/* <div className="inline-flex items-center justify-between w-full px-6">
            <div className="inline-flex gap-2">
            <span className="rounded-md w-12 h-12 bg-gray-500"></span>
            <div className="flex flex-col">
                <h5 className="font-medium">John Doe</h5>
                <p className="text-sm">Hey, how are you doing?</p>
            </div>
            </div>
            
            <div className="inline-flex justify-center items-center gap-4">
            <span className="rounded-full text-sm p-1 bg-green-500 text-white">5+</span>
            <svg width="5" height="17" viewBox="0 0 5 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.09161 6.27484C0.941226 6.27484 0 7.21607 0 8.36646C0 9.51684 0.941226 10.4581 2.09161 10.4581C3.242 10.4581 4.18323 9.51684 4.18323 8.36646C4.18323 7.21607 3.242 6.27484 2.09161 6.27484ZM2.09161 0C0.941226 0 0 0.941226 0 2.09161C0 3.242 0.941226 4.18323 2.09161 4.18323C3.242 4.18323 4.18323 3.242 4.18323 2.09161C4.18323 0.941226 3.242 0 2.09161 0ZM2.09161 12.5497C0.941226 12.5497 0 13.4909 0 14.6413C0 15.7917 0.941226 16.7329 2.09161 16.7329C3.242 16.7329 4.18323 15.7917 4.18323 14.6413C4.18323 13.4909 3.242 12.5497 2.09161 12.5497Z" fill="#212529"/>
</svg>

            
            </div>
        </div> */}

      </div>
    </div>
  );
};

export default MyChat;
