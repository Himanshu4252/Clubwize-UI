"use client";
import React, { useEffect, useRef, useState } from "react";
import PaginationBar from "../ProfileFeed/PaginationBar/PaginationBar";

const MembersFeed = () => {
  const members = [
    {
      name: "Cameron Williamson (You)",
      level: "Admin",
      contributions: 2500,
      joinDate: "October 30, 2017",
      occupation: "UI UX Designer",
    },
    {
      name: "Bessie Cooper",
      level: "Moderator",
      contributions: 256,
      joinDate: "July 14, 2015",
      occupation: "President of Sales",
    },
    {
      name: "Ronald Richards",
      level: "Moderator",
      contributions: 19500,
      joinDate: "October 25, 2019",
      occupation: "Dog Trainer",
    },
    {
      name: "Courtney Henry",
      level: "Moderator",
      contributions: 2300,
      joinDate: "December 19, 2013",
      occupation: "Web Designer",
    },
    {
      name: "Jacob Jones",
      level: "Member",
      contributions: 1200,
      joinDate: "April 28, 2016",
      occupation: "Nursing Assistant",
    },
    {
      name: "Brooklyn Simmons",
      level: "Member",
      contributions: 20,
      joinDate: "November 16, 2014",
      occupation: "Medical Assistant",
    },
    {
      name: "Robert Fox",
      level: "Member",
      contributions: 9,
      joinDate: "September 24, 2017",
      occupation: "Web Designer",
    },
  ];
  const [sortOpen, setSortOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [ownActionClick, setOwnActionClick] = useState(false);
  const [actionClick, setActionClick] = useState(false);
  const moderatorActionMenus = [ "Send Message", "Make Member", "Make admin", "Remove user"];
  const memberActionMenus = [ "Send Message", "Make Moderator", "Make admin", "Remove user"];
  const [selectedMemberId, setSelectedMemberId] = useState<number | null>(null);
  const [inviteMember, setInviteMember] = useState(false);
  const cities = [
    "Fort Lauderdale (FL)",
    "Resistencia",
    "Krasnodar",
    "Vladikavkaz (Osetinskaya ASSR)",
    "Khabarovsk",
    "Ontario (CA)",
    "Herne",
    "Rubtsovsk",
    "Cologne",
    "Ryazan",
    "San Juan",
    "Baton Rouge (LA)",
  ];

  const inviteMemberData = [
    {
      name: "Vaeron Williamson",
      occupation: "Dog Trainer",
    },
    {
      name: "Vartney Henry",
      occupation: "Medical Assistant",
    },
    {
      name: "Vaody Fisher",
      occupation: "Web Designer",
    },
    {
      name: "Vaofgery Fox",
      occupation: "Marketing Coordinator",
    },
    {
      name: "Varmot Williamson",
      occupation: "President of Sales",
    },
  ];

  const handleFilterClick = () => {
    setFilterOpen(!filterOpen);
  };

  const handleSortClick = () => {
    setSortOpen(!sortOpen);
  };

  const handleOwnActionClick = () => {
    setOwnActionClick(!ownActionClick);
  };

  const handleActionClick = () => {
    setActionClick(!actionClick);
  };

  const sortLinks = [
    "A to Z",
    "Joined date",
    "By Level",
    "By contribution",
    "Relevance",
  ];

  const filterMenus = ["Admin", "Moderator", "Member"];

  const PopupMenu = ({level } :any) => {
    const [isOpen, setIsOpen] = useState(false);
    const popupRef = useRef<HTMLDivElement>(null);
    console.log(level);

    const handleIconClick = () => setIsOpen(!isOpen);

    const handleOptionClick = (option: string, projectId?: number) => {
        if (option === 'Select' && projectId !== undefined) {
          setSelectedMemberId(projectId);
        }
        console.log(`${option} clicked`);
        setIsOpen(false);
      };
      
   
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    return (
      <td className="p-3 text-xs relative">
          <svg 
                  onClick={handleIconClick}
                  className=" cursor-pointer" width="5" height="17" viewBox="0 0 5 17" fill="none" xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.09161 6.27484C0.941226 6.27484 0 7.21607 0 8.36646C0 9.51684 0.941226 10.4581 2.09161 10.4581C3.242 10.4581 4.18323 9.51684 4.18323 8.36646C4.18323 7.21607 3.242 6.27484 2.09161 6.27484ZM2.09161 0C0.941226 0 0 0.941226 0 2.09161C0 3.242 0.941226 4.18323 2.09161 4.18323C3.242 4.18323 4.18323 3.242 4.18323 2.09161C4.18323 0.941226 3.242 0 2.09161 0ZM2.09161 12.5497C0.941226 12.5497 0 13.4909 0 14.6413C0 15.7917 0.941226 16.7329 2.09161 16.7329C3.242 16.7329 4.18323 15.7917 4.18323 14.6413C4.18323 13.4909 3.242 12.5497 2.09161 12.5497Z"
                      fill="#495057"
                    />
                  </svg>
        {isOpen && (
          <div
            ref={popupRef}
            className="absolute mt-1 z-50 right-10 w-max bg-white border border-gray-300 rounded-lg shadow-lg"
          >
             
            <ul className=""> 
              {
              (level === "Admin") ? 
              (
                <li className="p-2 hover:bg-gray-100 text-red-500 cursor-pointer" onClick={() => handleOptionClick('Select', 0)}>
                Leave Club
              </li>
              ) : 
              (level === "Moderator") ? 
              (
                <>
                {
                moderatorActionMenus.map((menu, index) => (
                
                  <li key={index} className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick(menu, 0)}>
                    {menu}
                  </li>
                ))}
                <li className="p-2 text-red-500 hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick('Delete')}>
                Remove User
              </li>
                </>
                )
                 : 
                (
                  <>{
                  memberActionMenus.map((menu, index) => (
                    <li key={index} className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick(menu, 0)}>
                      {menu}
                    </li> 
                ))}
                <li className="p-2 text-red-500 hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick('Delete')}>
                Remove User
              </li>
                </>
                )
                
              }

          
              
            </ul>
          </div>
        )}
      </td>
    );
  };

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md">
      <div className="inline-flex  w-full justify-between p-6  border-b-2 border-b-gray-300">
        <p className="text-2xl font-medium ">All Members</p>
        <div onClick={() => setInviteMember(!inviteMember)} className="inline-flex rounded-lg gap-2 py-1 px-3 border border-gray-300 text-gray-600 cursor-pointer hover:bg-gray-300">
          + Invite
        </div>
      </div>

      <div className="flex items-center justify-between p-6 gap-2 ">
        <div className="flex items-center flex-1">
          <div className="flex items-center border rounded-lg px-4 py-1.5 bg-white flex-1">
            {/* Serach Icon */}
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5005 14.5005C9.28843 14.5005 10.0687 14.3453 10.7966 14.0438C11.5246 13.7423 12.186 13.3003 12.7431 12.7431C13.3003 12.186 13.7423 11.5246 14.0438 10.7966C14.3453 10.0687 14.5005 9.28843 14.5005 8.5005C14.5005 7.71257 14.3453 6.93236 14.0438 6.2044C13.7423 5.47645 13.3003 4.81501 12.7431 4.25786C12.186 3.70071 11.5246 3.25875 10.7966 2.95723C10.0687 2.6557 9.28843 2.5005 8.5005 2.5005C6.9092 2.5005 5.38308 3.13264 4.25786 4.25786C3.13264 5.38308 2.5005 6.9092 2.5005 8.5005C2.5005 10.0918 3.13264 11.6179 4.25786 12.7431C5.38308 13.8684 6.9092 14.5005 8.5005 14.5005ZM14.8205 13.4065L18.4005 16.9865C18.4959 17.0788 18.572 17.1892 18.6244 17.3113C18.6767 17.4333 18.7042 17.5645 18.7052 17.6973C18.7063 17.8301 18.6809 17.9618 18.6305 18.0846C18.5802 18.2075 18.5058 18.3191 18.4119 18.4129C18.3179 18.5067 18.2062 18.5809 18.0833 18.6311C17.9604 18.6813 17.8287 18.7065 17.6959 18.7052C17.5631 18.704 17.4319 18.6763 17.3099 18.6238C17.188 18.5713 17.0777 18.4951 16.9855 18.3995L13.4055 14.8195C11.798 16.0674 9.7753 16.6557 7.74926 16.4647C5.72322 16.2737 3.84611 15.3178 2.50005 13.7916C1.154 12.2653 0.440188 10.2834 0.503929 8.24943C0.56767 6.2154 1.40417 4.28213 2.84315 2.84315C4.28213 1.40417 6.2154 0.56767 8.24943 0.503929C10.2834 0.440188 12.2653 1.154 13.7916 2.50005C15.3178 3.84611 16.2737 5.72322 16.4647 7.74926C16.6557 9.7753 16.0674 11.798 14.8195 13.4055L14.8205 13.4065Z"
                fill="#6C757D"
              />
            </svg>

            <input
              type="text"
              placeholder="Search for Members..."
              className="outline-none flex-1 ml-2 text-xs"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2 ">
          <div
            className="relative p-2 bg-white border border-gray-300 flex items-center rounded-lg justify-center cursor-pointer"
            onClick={handleFilterClick}
          >
            {/* Filter Icon */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.11111 16C6.75556 16 6.48889 15.913 6.13333 15.7391C5.6 15.3913 5.33333 14.8696 5.33333 14.2609V9.04348L0.533333 4.34783C0.177778 4 0 3.56522 0 3.13043V1.73913C0 0.782609 0.8 0 1.77778 0H14.2222C15.2 0 16 0.782609 16 1.73913V3.13043C16 3.56522 15.8222 4 15.4667 4.34783L10.6667 9.04348V13.3913C10.6667 14.087 10.3111 14.6087 9.68889 14.9565L7.91111 15.8261C7.64444 15.913 7.37778 16 7.11111 16ZM1.77778 1.73913V3.13043L6.57778 7.82609C6.93333 8.17391 7.11111 8.6087 7.11111 9.04348V14.2609L8.88889 13.3913V9.04348C8.88889 8.6087 9.06667 8.17391 9.42222 7.82609L14.2222 3.13043V1.73913H1.77778Z"
                fill="#6C757D"
              />
            </svg>

            {filterOpen && (
              <div className="absolute right-0 top-10 bg-white shadow-md rounded-lg  w-36 z-10">
                <ul>
                  {filterMenus &&
                    filterMenus.map((menu, index) => (
                      <li
                        key={index}
                        className="inline-flex gap-2 px-3 py-1 hover:bg-gray-100 w-full"
                      >
                        <input type="checkbox" name="role" value={menu} />
                        <label htmlFor="role">{menu}</label>
                      </li>
                    ))}
                </ul>

                {/* <a href="#" className="block w-full text-left px-4 py-1 text-sm hover:bg-gray-100">
                Send a Message
              </a> */}
              </div>
            )}
          </div>

          <div className="relative p-2 bg-white border border-gray-300 flex items-center rounded-lg justify-center cursor-pointer">
            {/* Sort Icon */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleSortClick}
            >
              <path
                d="M1.00077 0C0.735344 0 0.480799 0.120413 0.293115 0.334736C0.105441 0.549071 0 0.839761 0 1.14287C0 1.44599 0.105441 1.73668 0.293115 1.95101C0.480799 2.16533 0.735344 2.28575 1.00077 2.28575H12.0092C12.2746 2.28575 12.5292 2.16533 12.7168 1.95101C12.9045 1.73668 13.01 1.44599 13.01 1.14287C13.01 0.839761 12.9045 0.549071 12.7168 0.334736C12.5292 0.120413 12.2746 0 12.0092 0H1.00077ZM1.00077 4.57149C0.735344 4.57149 0.480799 4.69191 0.293115 4.90623C0.105441 5.12056 0 5.41125 0 5.71437C0 6.01748 0.105441 6.30817 0.293115 6.52251C0.480799 6.73683 0.735344 6.85724 1.00077 6.85724H8.00614C8.27154 6.85724 8.52613 6.73683 8.71378 6.52251C8.90142 6.30817 9.0069 6.01748 9.0069 5.71437C9.0069 5.41125 8.90142 5.12056 8.71378 4.90623C8.52613 4.69191 8.27154 4.57149 8.00614 4.57149H1.00077ZM1.00077 9.14299C0.735344 9.14299 0.480799 9.26345 0.293115 9.47774C0.105441 9.69203 0 9.98277 0 10.2859C0 10.589 0.105441 10.8797 0.293115 11.094C0.480799 11.3083 0.735344 11.4287 1.00077 11.4287H5.00383C5.26926 11.4287 5.5238 11.3083 5.71149 11.094C5.89916 10.8797 6.0046 10.589 6.0046 10.2859C6.0046 9.98277 5.89916 9.69203 5.71149 9.47774C5.5238 9.26345 5.26926 9.14299 5.00383 9.14299H1.00077ZM13.01 5.71437C13.01 5.41125 12.9045 5.12056 12.7168 4.90623C12.5292 4.69191 12.2746 4.57149 12.0092 4.57149C11.7438 4.57149 11.4892 4.69191 11.3016 4.90623C11.1139 5.12056 11.0084 5.41125 11.0084 5.71437V12.0985L9.71445 10.6207C9.5257 10.4125 9.27291 10.2973 9.01051 10.2999C8.74811 10.3025 8.49711 10.4228 8.31157 10.6347C8.12603 10.8466 8.02075 11.1332 8.01845 11.4328C8.01614 11.7325 8.11702 12.0212 8.29936 12.2367L11.3017 15.6654C11.4893 15.8797 11.7438 16 12.0092 16C12.2746 16 12.5291 15.8797 12.7167 15.6654L15.719 12.2367C15.9014 12.0212 16.0023 11.7325 16 11.4328C15.9977 11.1332 15.8924 10.8466 15.7068 10.6347C15.5213 10.4228 15.2703 10.3025 15.0079 10.2999C14.7455 10.2973 14.4927 10.4125 14.304 10.6207L13.01 12.0985V5.71437Z"
                fill="#6C757D"
              />
            </svg>
            {sortOpen && (
              <div className="absolute right-0 top-10 bg-white shadow-md rounded-lg  w-36 z-10">
                {sortLinks &&
                  sortLinks.map((link, index) => (
                    <a
                      href="#"
                      key={index}
                      className="w-full block  text-left px-2 py-1  text-sm hover:bg-gray-100"
                    >
                      {link}
                    </a>
                  ))}

                {/* <a href="#" className="block w-full text-left px-4 py-1 text-sm hover:bg-gray-100">
                Send a Message
              </a> */}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Member Table */}
      <table className="w-full bg-white rounded-lg shadow px-6">
        <thead className="bg-[#F8F9FA] border border-[EAECF0] space-bne">
          <tr>
            <th className="text-left p-3 text-[0.65rem]">Member&apos;s Name</th>
            <th className="text-left p-3 text-[0.65rem]">Level</th>
            <th className="text-left p-3 text-[0.65rem]">Contribution</th>
            <th className="text-left p-3 text-[0.65rem] flex items-center gap-1">
              <span>Join Date</span>
              <svg
                width="9"
                height="13"
                viewBox="0 0 9 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.219668 3.82265C-0.0732226 4.1047 -0.0732226 4.56198 0.219668 4.84403C0.512566 5.12605 0.987437 5.12605 1.28033 4.84403L4.50001 1.7436L7.71969 4.84403C8.01257 5.12605 8.48747 5.12605 8.78034 4.84403C9.07322 4.56198 9.07322 4.1047 8.78034 3.82265L5.03034 0.211532C4.88971 0.0760935 4.69891 0 4.50001 0C4.30111 0 4.11031 0.0760935 3.96968 0.211532L0.219668 3.82265ZM8.78034 9.17736C9.07322 8.89533 9.07322 8.43802 8.78034 8.15599C8.48747 7.87397 8.01257 7.87397 7.71969 8.15599L4.50001 11.2564L1.28033 8.15599C0.987437 7.87397 0.512566 7.87397 0.219668 8.15599C-0.0732226 8.43802 -0.0732226 8.89533 0.219668 9.17736L3.96968 12.7885C4.26256 13.0705 4.73746 13.0705 5.03034 12.7885L8.78034 9.17736Z"
                  fill="#6C757D"
                />
              </svg>
            </th>
            <th className="text-left p-3 text-[0.65rem]">Action</th>
          </tr>
        </thead>
        <tbody>
          {members && members.length > 0 ? (
            members.map((member, index) => (
              <tr key={index} className="border-b  justify-center items-center">
                <td className="p-3 w-[10vh] text-xs">
                  <div className="inline-flex gap-2">
                    <div className="rounded-md bg-gray-400 w-10 h-10"></div>
                    <div className="flex flex-col w-[20vh]">
                      <div className="text-xs font-bold truncate">
                        {member.name}
                      </div>
                      <p className="text-gray-500 text-xxs mt-1 truncate">
                        {member.occupation}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-3 relative text-[0.65rem] group flex items-center text-center justify-center cursor-pointer">
                  {member.level === "Admin" ? (
                    <>
                    <span className="ml-2 p-1 px-2 bg-green-100 text-green-500 rounded-md">
                      {member.level}
                      
                    </span>
                                    
                      <div className="flex flex-col absolute left-1/2 bottom-2/3 mb-2 w-max 
                      text-black text-left rounded-md opacity-0 group-hover:opacity-100 
                      transform -translate-x-1/2 -translate-y transition-opacity duration-300
                      border border-gray-400 overflow-hidden">
                        <p className="text-sm p-2 px-3 bg-gray-100 border-b border-b-gray-300">
                          Administrator Authority
                        </p>
                        <ul className="bg-white p-4 flex flex-col justify-center">
                          <li className="inline-flex gap-2 items-center"><span className="rounded-full bg-black w-1 h-1"></span>Full control over group settings and members.</li>
                          <li className="inline-flex gap-2 items-center"><span className="rounded-full bg-black w-1 h-1"></span>Limited control over group settings and content moderation.</li>
                          <li className="inline-flex gap-2 items-center"><span className="rounded-full bg-black w-1 h-1"></span>Regular group participant with standard privileges.</li>
                        </ul>
                        
                      </div>
                    </>
                    
                  ) : member.level === "Moderator" ? (
                    <>
                    <span className="ml-2 p-1 px-2 bg-orange-100 text-orange-500 rounded-md">
                      {member.level}
                    </span>
                    <div className="flex flex-col absolute left-1/2 bottom-2/3 mb-2 w-max 
                      text-black text-left rounded-md opacity-0 group-hover:opacity-100 
                      transform -translate-x-1/2 -translate-y transition-opacity duration-300
                      border border-gray-400 overflow-hidden">
                        <p className="text-sm p-2 px-3 bg-gray-100 border-b border-b-gray-300">
                          Moderator Authority
                        </p>
                        <ul className="bg-white p-4 flex flex-col justify-center">
                          <li className="inline-flex gap-2 items-center"><span className="rounded-full bg-black w-1 h-1"></span>Limited control over group settings and content moderation.</li>
                          <li className="inline-flex gap-2 items-center"><span className="rounded-full bg-black w-1 h-1"></span>Regular group participant with standard privileges.</li>
                        </ul>
                        
                        
                      </div>
                    </>
                  ) : (
                    <>
                    <span className="ml-2 p-1 px-2 bg-gray-100 text-gray-500 rounded-md">
                      {member.level}
                    </span>
                    <div className="flex flex-col absolute left-1/2 bottom-2/3 mb-2 w-max 
                      text-black text-left rounded-md opacity-0 group-hover:opacity-100 
                      transform -translate-x-1/2 -translate-y transition-opacity duration-300
                      border border-gray-400 overflow-hidden">
                        <p className="text-sm p-2 px-3 bg-gray-100 border-b border-b-gray-300">
                          Member Authority
                        </p>
                        <ul className="bg-white p-4 flex flex-col justify-center">
                          <li className="inline-flex gap-2 items-center"><span className="rounded-full bg-black w-1 h-1"></span>Regular group participant with standard privileges.</li>
                        </ul>
                        
                      </div>
                    </>
                  )}
                </td>
                <td className="p-3 text-[0.65rem]">
                  <div className="flex items-center">
                    <span className="ml-2">{member.contributions}</span>
                  </div>
                </td>
                <td className="p-3 text-xs flex items-center">
                  <div className="p-1 text-xs">{member.joinDate}</div>
                </td>

                <PopupMenu level={member.level} />
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="p-3 text-center text-gray-500">
                No projects available
              </td>
            </tr>
          )}
        </tbody>
      </table>
      

      <PaginationBar />
      {inviteMember && (
        <>
          <div className="fixed top-0 left-0 w-screen h-screen bg-opacity-40 bg-black z-20"></div>
          <div className="flex w-96 flex-col fixed shadow-lg bg-white rounded-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
            <div className="inline-flex justify-between font-medium py-3 px-4">
              <p className="text-2xl">Invite Member</p>
              <p
                className="cursor-pointer"
                onClick={() => setInviteMember(!inviteMember)}
              >
                <svg
                  className="cursor-pointer"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <rect
                      width="32"
                      height="32"
                      fill="white"
                      fill-opacity="0.01"
                    />
                    <g clip-path="url(#clip0_1370_61453)">
                      <rect
                        width="16"
                        height="16"
                        transform="translate(8 8)"
                        fill="white"
                        fill-opacity="0.01"
                      />
                      <g clip-path="url(#clip1_1370_61453)">
                        <path
                          d="M8.29279 8.29218C8.48031 8.10471 8.73462 7.99939 8.99979 7.99939C9.26495 7.99939 9.51926 8.10471 9.70679 8.29218L15.9998 14.5852L22.2928 8.29218C22.385 8.19667 22.4954 8.12049 22.6174 8.06808C22.7394 8.01567 22.8706 7.98808 23.0034 7.98693C23.1362 7.98578 23.2678 8.01108 23.3907 8.06136C23.5136 8.11164 23.6253 8.18589 23.7192 8.27979C23.8131 8.37368 23.8873 8.48533 23.9376 8.60823C23.9879 8.73112 24.0132 8.8628 24.012 8.99558C24.0109 9.12836 23.9833 9.25958 23.9309 9.38159C23.8785 9.50359 23.8023 9.61393 23.7068 9.70618L17.4138 15.9992L23.7068 22.2922C23.8889 22.4808 23.9897 22.7334 23.9875 22.9956C23.9852 23.2578 23.88 23.5086 23.6946 23.694C23.5092 23.8794 23.2584 23.9846 22.9962 23.9869C22.734 23.9891 22.4814 23.8883 22.2928 23.7062L15.9998 17.4132L9.70679 23.7062C9.51818 23.8883 9.26558 23.9891 9.00339 23.9869C8.74119 23.9846 8.49038 23.8794 8.30497 23.694C8.11956 23.5086 8.01439 23.2578 8.01211 22.9956C8.00983 22.7334 8.11063 22.4808 8.29279 22.2922L14.5858 15.9992L8.29279 9.70618C8.10532 9.51865 8 9.26435 8 8.99918C8 8.73402 8.10532 8.47971 8.29279 8.29218Z"
                          fill="black"
                        />
                      </g>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1370_61453">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(8 8)"
                      />
                    </clipPath>
                    <clipPath id="clip1_1370_61453">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(8 8)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </p>
            </div>

            <hr />

            <div className="inline-flex justify-between items-center p-4 gap-2">
              <input
                className="bg-gray-100 outline-none rounded-md text-sm border border-gray-300 w-[70%] py-2 pl-3"
                type="text"
                placeholder="Enter "
              />
              <div className="rounded-md text-sm px-3 py-2   cursor-pointer justify-center  items-center border w-[30%] border-gray-300 flex-nowrap text-red-500 text-center hover:text-white hover:bg-red-500">
                X Close
              </div>
              <div className="rounded-md text-sm px-3 py-2  inline-flex gap-2 cursor-pointer justify-center  items-center border w-[30%] border-gray-300 flex-nowrap text-gray-500 text-center hover:text-white hover:bg-gray-500">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_1474_19972"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="18"
                    height="18"
                  >
                    <path d="M0 0H18V18H0V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_1474_19972)">
                    <path
                      d="M15.8906 2.39059H2.10938C1.33274 2.39059 0.703125 3.0202 0.703125 3.79684V5.18361L8.16072 10.7306C8.65888 11.1012 9.34112 11.1012 9.83929 10.7306L17.2969 5.18361V3.79684C17.2969 3.0202 16.6673 2.39059 15.8906 2.39059Z"
                      stroke="#212529"
                      stroke-width="2.44791"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M16.5938 8.33551V14.2031C16.5938 14.5908 16.2783 14.9063 15.8906 14.9063H2.10938C1.72167 14.9063 1.40625 14.5908 1.40625 14.2031V8.33551L0 7.28954V14.2031C0 15.3662 0.946266 16.3125 2.10938 16.3125H15.8906C17.0537 16.3125 18 15.3662 18 14.2031V7.28954L16.5938 8.33551Z"
                      fill="#212529"
                    />
                  </g>
                </svg>
                Email
              </div>
            </div>


            <div className="p-4">
              <select
                className="rounded-md border border-gray-300 p-2 w-28 font-normal text-base"
                name="Location"
                id="Location"
              >
                <option value="0">Location</option>
                {cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option> 

                ))}
              </select>
            </div>

            <div className="flex flex-col">
              {inviteMemberData.map((data, index) => (
                <>
<div key={index} className="inline-flex gap-2 p-4 py-2">
                <div className="rounded-lg bg-gray-600 w-12 h-12"></div>
                <div className="flex flex-col text-md">
                  <p>{data.name}</p>
                  <p className="text-gray-600 text-base">{data.occupation}</p>
                </div>
              </div>
              <hr />
                </>
              ))}
              
            </div>

            <hr />
            <div className="inline-flex gap-3 justify-end realtiev p-4 items-center">
              <div className="rounded-md text-sm px-3 py-1 cursor-pointer border border-gray-300 hover:bg-gray-300">
                Cancel
              </div>
              <div className="rounded-md text-sm px-6 py-1 cursor-pointer  bg-green-500 border  border-green-500  text-white hover:bg-green-600">
                Send
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MembersFeed;
