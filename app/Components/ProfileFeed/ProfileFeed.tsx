"use client";
import React, { useState } from "react";
import { clamp } from "lodash";
import TruncatedText from "../Utils/TrunckedText";

const ProfileFeed = () => {
  const [toggleAbout, setToggleAbout] = useState(false);
  const [leaveNode, setLeaveNode] = useState(false);
  const [inviteMember, setInviteMember] = useState(true);

  const about =
    "Our mission is simple but crucial: to protect and promote the well-being of trees and forests. Together, we can make a positive impact on our environment and leave a legacy for generations to come.Our mission is simple but crucial: to protect and promote the well-being of trees and forests. Together, we can make a positive impact on our environment and leave a legacy for generations ssion is simple but crucial: to protect and promote the well-being of trees and forests. Together, we can make a positive impact on our environment and leave a legacy for generations to come.Our mission is simple but crucial: to protect and promote the well-being of trees and forests. Together, we can make a positive impact on our environment and leave a legacy for generations ssion is simple but crucial: to protect and promote the well-being of trees and forests. Together, we can make a positive impact on our environment and leave a legacy for generations to come.Our mission is simple but crucial: to protect and promote the well-being of trees and forests. Together, we can make a positive impact on our environment and leave a legacy for generations to come.Our mission is simple but crucial: to protect and promote the well-being of trees and forests. Together, we can make a positive impact on our environment and leave a legacy for generations to come. Hide";
  // trunk the text

  return (
    <div className="relative flex flex-col gap-4 w-full h-1/2 bg-white border border-1 shadow-md rounded-md p-6">
      {/* Members Head */}
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-2">
          {/* Members Heading and Couting */}
          <div className="inline-flex items-center gap-2">
            <p className="text-xl font-medium">Members</p>
            {/* Rounded dot sepeator */}
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            <p className="text-sm text-gray-500">2.4k Members</p>
          </div>

          {/* Members List and See all */}
          <div className="inline-flex items-center gap-2 justify-center">
            {/* <p className="text-sm text-gray-500">List of Members</p> */}
            <div className="inline-flex relative w-36 h-10">
              <div className="absolute left-0 w-10 h-10 bg-gray-500 rounded-full ring-2 ring-white"></div>
              <div className="absolute left-[1.5rem] w-10 h-10 bg-gray-500 rounded-full ring-2 ring-white"></div>
              <div className="absolute left-[3rem] w-10 h-10 bg-gray-500 rounded-full ring-2 ring-white"></div>
              <div className="absolute left-[4.5rem] w-10 h-10 bg-gray-500 rounded-full ring-2 ring-white"></div>
              <div className="absolute left-[6rem] w-10 h-10 bg-gray-500 rounded-full ring-2 ring-white text-white flex justify-center items-center text-center">
                2k+{" "}
              </div>

              {/* <div className="relative flex justify-center">
    <div className="absolute left-0">
        <div className="w-10 h-10 bg-gray-500 rounded-full ring-2 ring-black text-white flex justify-center items-center text-center">1</div>
    </div>
    <div className="absolute left-5">
        <div className="w-10 h-10 bg-gray-500 rounded-full ring-2 ring-black text-white flex justify-center items-center text-center">2</div>
    </div>
    <div className="absolute left-24">
        <div className="w-10 h-10 bg-gray-500 rounded-full ring-2 ring-black text-white flex justify-center items-center text-center">3</div>
    </div>
</div> */}
            </div>
            <p className="text-sm text-black  border border-gray-300 p-2 rounded-xl px-3">
              See all
            </p>
          </div>
        </div>

        <div className="inline-flex gap-4 items-center">
          <div className="w-max py-2 px-3 text-white bg-black rounded-lg cursor-pointer" onClick={()=> setInviteMember(!inviteMember)}>
            + Invite
          </div>
          <div className="inline-flex items-center gap-2 w-max py-2 px-3 bg- border border-b-gray-300 rounded-lg cursor-pointer">
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.9142 3.73977L6.1008 5.14862C5.99294 5.33544 5.96371 5.55747 6.01954 5.76584C6.07538 5.97422 6.2117 6.15188 6.39853 6.25974C6.58535 6.36761 6.80737 6.39684 7.01575 6.341C7.22413 6.28517 7.40179 6.14884 7.50965 5.96202L8.32305 4.55317C8.64664 3.99269 9.17963 3.58372 9.80475 3.41622C10.4299 3.24872 11.0959 3.33641 11.6564 3.66C12.2169 3.98359 12.6259 4.51657 12.7934 5.1417C12.9609 5.76683 12.8732 6.43289 12.5496 6.99337L10.9228 9.81106C10.5992 10.3715 10.0662 10.7805 9.4411 10.948C8.81597 11.1155 8.1499 11.0278 7.58943 10.7042C7.43709 10.6207 7.26158 10.5893 7.08971 10.6148C7.05019 10.6141 7.01066 10.6158 6.97134 10.6198C6.92894 10.6371 6.88816 10.6582 6.84949 10.6828C6.6878 10.7468 6.55347 10.8651 6.46963 11.0175C6.38579 11.1698 6.35768 11.3466 6.39015 11.5174C6.389 11.5517 6.39023 11.586 6.39383 11.62C6.41044 11.6574 6.42931 11.6937 6.45035 11.7288C6.5142 11.8889 6.62854 12.0238 6.77603 12.1131C7.71046 12.6511 8.82012 12.7965 9.86162 12.5174C10.9031 12.2384 11.7914 11.5576 12.3316 10.6245L13.9584 7.80677C14.4978 6.87264 14.6439 5.76253 14.3647 4.72065C14.0856 3.67877 13.4039 2.79046 12.4698 2.25115C11.5357 1.71183 10.4256 1.56568 9.38371 1.84485C8.34183 2.12402 7.45352 2.80565 6.9142 3.73977Z"
                fill="#212529"
              />
              <path
                d="M8.48229 14.038L7.66889 15.4468C7.3453 16.0073 6.81232 16.4163 6.18719 16.5838C5.56206 16.7513 4.896 16.6636 4.33552 16.34C3.77505 16.0164 3.36607 15.4834 3.19857 14.8583C3.03107 14.2331 3.11876 13.5671 3.44235 13.0066L5.06914 10.1889C5.39274 9.62844 5.92572 9.21946 6.55085 9.05196C7.17598 8.88446 7.84204 8.97215 8.40252 9.29574C8.58934 9.4036 8.81136 9.43283 9.01974 9.377C9.22812 9.32116 9.40578 9.18484 9.51364 8.99801C9.6215 8.81119 9.65073 8.58917 9.5949 8.38079C9.53907 8.17241 9.40274 7.99475 9.21592 7.88689C8.28149 7.34889 7.17182 7.20347 6.13032 7.48254C5.08883 7.76161 4.20053 8.44238 3.6603 9.37551L2.0335 12.1932C1.49418 13.1273 1.34803 14.2374 1.6272 15.2793C1.90637 16.3212 2.588 17.2095 3.52212 17.7488C4.45625 18.2881 5.56635 18.4343 6.60824 18.1551C7.65012 17.876 8.53842 17.1943 9.07774 16.2602L9.89114 14.8514C9.999 14.6645 10.0282 14.4425 9.9724 14.2341C9.91657 14.0258 9.78024 13.8481 9.59342 13.7402C9.40659 13.6324 9.18457 13.6031 8.97619 13.659C8.76782 13.7148 8.59016 13.8511 8.48229 14.038Z"
                fill="#212529"
              />
            </svg>
            Copy Link
          </div>
          <div className="inline-flex gap-2 items-center w-max py-2 px-3 text-red-600 rounded-lg cursor-pointer" onClick={()=> setLeaveNode(!leaveNode)}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.51172 16.5206C7.51172 16.0014 7.09086 15.5806 6.57166 15.5806H1.87134V2.41968H6.57166C7.09086 2.41968 7.51172 1.99879 7.51172 1.47961C7.51172 0.960427 7.09086 0.539551 6.57166 0.539551H1.87134C0.832973 0.539551 -0.00878906 1.38131 -0.00878906 2.41968V15.5806C-0.00878906 16.619 0.832973 17.4607 1.87134 17.4607H6.57166C7.09086 17.4607 7.51172 17.0398 7.51172 16.5206Z"
                fill="#DC3545"
              />
              <path
                d="M17.5831 9.65864C17.6702 9.56999 17.7361 9.46828 17.781 9.35998C17.8266 9.2499 17.8519 9.12938 17.8523 9.00295V9.00013V8.99731C17.8516 8.75768 17.7598 8.51825 17.577 8.33541L13.8167 4.57514C13.4496 4.20803 12.8544 4.20803 12.4873 4.57514C12.1202 4.94226 12.1202 5.53747 12.4873 5.9046L14.6427 8.06006H5.63147C5.11228 8.06006 4.69141 8.48093 4.69141 9.00013C4.69141 9.51932 5.11228 9.94019 5.63147 9.94019H14.6427L12.4873 12.0957C12.1202 12.4628 12.1202 13.058 12.4873 13.4251C12.8544 13.7922 13.4496 13.7922 13.8167 13.4251L17.5763 9.6655L17.5831 9.65864Z"
                fill="#DC3545"
              />
            </svg>
            Leave{" "}
          </div>
        </div>
      </div>

      <hr />

      {/* Description */}
      <div className="flex flex-col">
        <h3 className="text-lg font-medium">Description</h3>
        <p className="text-sm text-gray-500 font-inter">
          Our mission is simple but crucial: to protect and promote the
          well-being of trees and forests. Together, we can make a positive
          impact on our environment and leave a legacy{" "}
        </p>
      </div>

      <hr />

      {/* Modules */}
      <div className="inline-flex gap-8 justify-start items-center">
        <div className="flex flex-col">
          <p>Modules</p>
          <p className=" underline text-green-500 text-sm">12 Moules</p>
        </div>
        <div className="flex h-6 border"></div>
        <div className="flex  flex-col">
          <p>Contributions</p>
          <p className="text-gray-400 text-sm">15.2k</p>
        </div>
        <div className="flex h-6 border"></div>
        <div className="flex flex-col">
          <p>Clubs</p>
          <p className=" underline text-green-500 text-sm">12 Clubs</p>
        </div>
        <div className="flex h-6 border"></div>
        <div className="flex flex-col">
          <p>Founded</p>
          <p className=" text-gray-400 text-sm">1996</p>
        </div>
      </div>

      <hr />

      {/* About */}
      <div className="flex flex-col">
        <h3 className="font-medium">About</h3>
        <p className="text-sm text-gray-500">
          {toggleAbout ? (
            <>
              {about}{" "}
              <span
                className="underline cursor-pointer text-blue-500"
                onClick={() => setToggleAbout(!toggleAbout)}
              >
                hide
              </span>{" "}
            </>
          ) : (
            <>
              <TruncatedText text={about} maxLines={4} />
              <span
                className="underline cursor-pointer text-blue-500"
                onClick={() => setToggleAbout(!toggleAbout)}
              >
                see all{" "}
              </span>
            </>
          )}
        </p>
      </div>

      {leaveNode && (
        <>
              <div className="fixed top-0 left-0 w-screen h-screen bg-opacity-40 bg-black">
              </div>
        <div className="flex w-96 flex-col fixed shadow-lg bg-white rounded-md p-6 gap-3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="inline-flex justify-between text-md font-semibold py-2">
            <p>Leave Node</p>
            <p className="cursor-pointer" onClick={() => setLeaveNode(!leaveNode)}>X</p>
          </div>
          <hr />
          <p className="text-base pb-4">
            Are you sure you want to leave this node?
          </p>
          <hr />
          <div className="inline-flex gap-3 justify-end">
              <div className="rounded-md text-sm px-3 py-1 cursor-pointer border border-gray-300">Cancel</div>
              <div className="rounded-md text-sm px-3 py-1 cursor-pointer  bg-red-500 text-white">Yes, Leave</div>
          </div>
        </div>
        </>
      )}

{inviteMember && (
        <>
              <div className="fixed top-0 left-0 w-screen h-screen bg-opacity-40 bg-black">
              </div>
        <div className="flex w-96 flex-col fixed shadow-lg bg-white rounded-md p-6 gap-3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="inline-flex justify-between text-xl font-medium py-2">
            <p>Invite Member</p>
            <p className="cursor-pointer" onClick={() => setInviteMember(!inviteMember)}>X</p>
          </div>
          <hr />
            <div className="inline-flex justify-between items-center gap-4">
              <input className="bg-gray-100 outline-none rounded-md text-xs border border-gray-300 w-[70%] py-2 pl-3" type="text" placeholder="Enter email" />
              <div className="rounded-md text-xs px-3 py-2   cursor-pointer justify-center  items-center border w-[30%] border-gray-300 flex-nowrap text-red-500">X Close</div>
            </div>
          <hr />
          <div className="inline-flex gap-3 justify-end">
              <div className="rounded-md text-sm px-3 py-1 cursor-pointer border border-gray-300">Cancel</div>
              <div className="rounded-md text-sm px-6 py-1 cursor-pointer  bg-green-500  text-white">Send</div>
          </div>
        </div>
        </>
      )}

    </div>
  );
};

export default ProfileFeed;
