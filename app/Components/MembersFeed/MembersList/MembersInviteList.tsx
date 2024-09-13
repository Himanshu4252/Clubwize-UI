import React, { useState } from 'react'

const MembersInviteList = () => {
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

  return (
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
  )
}

export default MembersInviteList