'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const bookmarksData = [
  { title: 'Lorem ipsum', postsCount: 256, dateInfo: 'Before 2 days', bgColor: 'bg-[#F8F7FD]', borderColor: 'border-[#F0EDFF]' },
  { title: 'Lorem ipsum', postsCount: 256, dateInfo: 'Before 2 days', bgColor: 'bg-[#FFFAF4]', borderColor: 'border-[#FFEDD8]' },
  { title: 'Lorem ipsum', postsCount: 256, dateInfo: 'Before 2 days', bgColor: 'bg-[#F8D7DA59]', borderColor: 'border-[#F8D7DA]' },
  { title: 'Lorem ipsum', postsCount: 256, dateInfo: 'Before 2 days', bgColor: 'bg-[#D2F4EA59]', borderColor: 'border-[#D2F4EA]' },
  { title: 'Lorem ipsum', postsCount: 256, dateInfo: 'Before 2 days', bgColor: 'bg-[#FFFAF4]', borderColor: 'border-[#FFEDD8]' },
  { title: 'Lorem ipsum', postsCount: 256, dateInfo: 'Before 2 days', bgColor: 'bg-[#D2F4EA59]', borderColor: 'border-[#D2F4EA]' },
  { title: 'Lorem ipsum', postsCount: 256, dateInfo: 'Before 2 days', bgColor: 'bg-[#F8F7FD]', borderColor: 'border-[#F0EDFF]' },
];

const Bookmarks: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [folderName, setFolderName] = useState<string>('');

  const toggleMenu = (index: number) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setFolderName('');
  };

  const handleCreateFolder = () => {
    console.log('Folder Created:', folderName);
    closeModal();
  };

  const isButtonDisabled = !folderName.trim();

  return (
    <div className="bg-white h-screen rounded-lg ">
      <div className="border-b border-gray-300 p-5 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Bookmark</h2>
          <p className="text-sm mt-2 text-gray-600">Below is a preview of the entire bookmarks feed that you can customise.</p>
        </div>
        <button
          className="text-sm text-black py-1 px-4 border rounded hover:bg-gray-600 hover:text-white"
          onClick={openModal}
        >
          + Create folder
        </button>
      </div>

      <div className="flex flex-wrap gap-8 p-4 mt-2 ml-2">
        {bookmarksData.map((bookmark, index) => (
          <div 
            key={index} 
            className={`relative flex justify-between items-start border p-4 rounded-md ${bookmark.bgColor} ${bookmark.borderColor} w-10vh h-20vh`}
          >
            <div>
              <h3 className="text-lg font-semibold">{bookmark.title}</h3>
              <p className="text-sm text-gray-400">{bookmark.postsCount} Posts • {bookmark.dateInfo}</p>
            </div>
            <div className="cursor-pointer" onClick={() => toggleMenu(index)}>
              <Image src="/BmarkImg/more.png" alt="More options" width={4} height={16} />
            </div>
            {activeMenu === index && (
              <div className="absolute top-10 right-0 w-32 bg-white border rounded shadow-md z-50">
                <ul className="text-sm">
                  <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Open</li>
                  <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Rename</li>
                  <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Share</li>
                  <li className="px-4 py-1 hover:bg-gray-100 text-red-500 cursor-pointer">Delete</li>
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 z-50">
          <div className="bg-white rounded-lg shadow-lg w-[60vh]">
            <div className="flex justify-between items-center border-b border-gray-500">
              <h3 className="text-2xl p-3">Create new folder</h3>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <svg className="w-7 h-7 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="p-4">
              <label htmlFor="folderName" className="block text-sm font-medium text-gray-900">Folder name</label>
              <input
                type="text"
                id="folderName"
                value={folderName}
                onChange={(e) => setFolderName(e.target.value)}
                className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm text-gray-300"
                placeholder="Enter name"
              />
            </div>
            <div className="flex justify-end gap-3 p-4">
              <button
                onClick={closeModal}
                className="bg-white text-black text-sm border border-gray-300 py-1 px-2 rounded hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateFolder}
                disabled={isButtonDisabled}
                className={`text-sm py-1 px-6 rounded ${isButtonDisabled ? 'bg-[#22B573] text-white opacity-50 cursor-not-allowed' : 'bg-[#22B573] text-white hover:bg-green-700'}`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookmarks;
