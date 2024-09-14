"use client";
import { on } from "events";
import Link from "next/link";
import React, { useState } from "react";

const PageNavigation = () => {
  const [isOpen, setIsOpen] = useState(true);
  const routes = {
    home: "/",
    onboarding: "/onboarding",
    feed : "/main/Feed",
    MembersFeed : "/main/Members",
    groupChat: "/Other/GroupChat",
    message: "/Other/Message",
    bookmarks: "/Other/BookMarks",
    debate: "/main/Debate",
    profile: "/main/ProfileFeed",
    projects: "/main/Projects",
    dashboard: "/Other/Dashboard",
    privacy : "/Other/Dashboard/privacy-policy",
    feedChapter: "/main/ChapterFeed/Feed",
    chatChapter: "/main/ChapterFeed/Chat",
    memberChapter: "/main/ChapterFeed/Member",
    approvalFeed : "/main/ApprovalFeed"


  };

  

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed origin-bottom-left bottom-0 left-0 inline-block text-left m-2  ease-in-out   duration-300">
        
      {isOpen && (
          <div className="absolute z-10 mt-2 w-max h-max origin-bottom-left bottom-12 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5  ease-in-out  duration-300  transition-all">
            <div className="py-1" role="none">
              
            {Object.entries(routes).map(([key, value]) => (
                <Link
                    key={key} // Use the key as a unique identifier
                    href={value}
                    className="block px-4 py-2 w-full text-sm text-gray-700 hover:bg-green-100"
                    role="menuitem"
                >
                    {key.charAt(0).toUpperCase() + key.slice(1)} {/* Capitalize the key for display */}
                </Link>
            ))}
              
              
            </div>
          </div>
        )}
        
        <div>
          <button
            onClick={toggleDropdown}
            className=" inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-green-300 text-sm font-medium text-gray-700 hover:bg-green-200  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          >
            Pages
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8l5-5 5 5H5z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* <div className="flex flex-col justify-between items-center border-2 p-4 list-none gap-2 w-full ">
          <Link className="bg-gray-600 text-white p-2 px-4 rounded-lg" href="/">
            <li>Home</li>
          </Link>
          <Link
            className="bg-gray-600 text-white p-2 px-4 rounded-lg"
            href="/onboarding"
          >
            <li>Onboarding</li>
          </Link>
          <Link
            className="bg-gray-600 text-white p-2 px-4 rounded-lg"
            href="/main/Feed"
          >
            <li>Feed</li>
          </Link>
          <Link
            className="bg-gray-600 text-white p-2 px-4 rounded-lg"
            href="/Other/GroupChat"
          >
            <li>GroupChat</li>
          </Link>
          <Link
            className="bg-gray-600 text-white p-2 px-4 rounded-lg"
            href="/Other/Message"
          >
            <li>Message</li>
          </Link>
          <Link
            className="bg-gray-600 text-white p-2 px-4 rounded-lg"
            href="/Other/BookMarks"
          >
            <li>Bookmarks</li>
          </Link>
          <Link
            className="bg-gray-600 text-white p-2 px-4 rounded-lg"
            href="/main/Debate"
          >
            <li>Debate</li>
          </Link>
          <Link
            className="bg-gray-600 text-white p-2 px-4 rounded-lg"
            href="/main/ProfileFeed"
          >
            <li>Profile</li>
          </Link>
          <Link
            className="bg-gray-600 text-white p-2 px-4 rounded-lg"
            href="/main/Projects"
          >
            <li>Projects</li>
          </Link>
          <Link
            className="bg-gray-600 text-white p-2 px-4 rounded-lg"
            href="/Other/Dashboard"
          >
            <li>Dashboard</li>
          </Link>
        </div> */}
    </>
  );
};

export default PageNavigation;
