"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import smile from "../../../public/assets/Team/smile.png";

interface ChatProps {
  isOpen: boolean;
  onClose: () => void;
  teamName: string;
  teamImage: StaticImageData;
  teamMessages: string[];
}

export default function Chat({
  isOpen,
  onClose,
  teamName,
  teamImage,
  teamMessages,
}: ChatProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed top-2/4 transform -translate-x-full translate-y-[-50%] p-5 pb-0 w-80 bg-white rounded-lg shadow-lg z-50">
      <div className="flex justify-between items-center py-4 px-0 border-b">
        <div className="flex items-center">
          <Image
            src={teamImage}
            alt={`${teamName} logo`}
            width={40}
            height={40}
          />
          <div className="flex flex-col ml-2">
            <h3 className="text-lg font-medium">{teamName}</h3>
            <p className="text-gray-400 text-sm">2.2K Members</p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-xl font-bold text-gray-600  pb-2"
            >
              ...
            </button>
            {menuOpen && (
              <div className="absolute right-0 top-8 bg-white shadow-md rounded-lg p-2 w-40 z-10">
                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                  Team info
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                  Mute
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100">
                  Delete
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                  Leave team
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                  Report / Block
                </button>
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            X
          </button>
        </div>
      </div>
      <hr className=" bg-black" />
      <div className="py-4 px-0 overflow-y-auto max-h-64">
        {teamMessages.map((message, index) => (
          <div key={index} className="mb-4">
            <p className="text-gray-600 text-sm">
              <strong>{teamName}:</strong>
            </p>
            <p className="bg-gray-300 p-2 text-xs rounded mt-2 ml-5 w-fit">
              {message}
            </p>
            <p className="bg-green-200 text-xs text-green-900 rounded mt-2 ml-auto w-fit p-2">
              Lorem ipsum dolor sit
            </p>
          </div>
        ))}
      </div>

      <div className="py-4 px-0 border-t flex w-full justify-center items-center gap-1">
        <div>
          <Image src={smile} alt="smile" width={30} height={30} />
        </div>
        <input
          type="text"
          placeholder="Write a message..."
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-9/12 text-xs"
        />
        <button className="bg-green-500 text-white px-3 py-2 rounded-lg text-xs">
          Send
        </button>
      </div>
    </div>
  );
}
