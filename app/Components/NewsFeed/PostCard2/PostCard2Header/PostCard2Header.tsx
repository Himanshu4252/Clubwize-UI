import React from 'react'
import Image from 'next/image'
import ClubwizeGreenLogo from '../../../../../public/img/ClubwizeGreenLogo.png'

const PostCard2Header = () => {
  return (
    <div className="w-full h-fit flex flex-row items-center justify-between border-b p-6  pb-6 ">
    {/* Left two  */}
    <div className="flex">
      {/* Avatar */}
      <div className="flex flex-col ">
        <div className="w-12 h-12 rounded-md">
            <Image src={ClubwizeGreenLogo} width={48} height={48} alt="avatar" />
        </div>
      </div>

      {/* Name and Date */}
      <div className="flex flex-col justify-start ml-4">
        {/* Name */}
        <div className="w-fit h-6 ">
          <p className="leading-none font-semibold">Clubwize</p>
        </div>

        {/* Role Category and times */}
        <div className="flex flex-row gap-2 w-fit h-fit items-center mt-1 ">
          
          <p className="leading-none text-base text-gray-500">2 hrs ago</p>
        </div>
      </div>
    </div>

    {/* Right One */}
    <div className="inline-flex gap-9 text-green-600">
      {/* Three dot Menu */}
      <svg
        width="5"
        height="19"
        viewBox="0 0 5 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.5 7.125C1.125 7.125 0 8.19375 0 9.5C0 10.8062 1.125 11.875 2.5 11.875C3.875 11.875 5 10.8062 5 9.5C5 8.19375 3.875 7.125 2.5 7.125ZM2.5 0C1.125 0 0 1.06875 0 2.375C0 3.68125 1.125 4.75 2.5 4.75C3.875 4.75 5 3.68125 5 2.375C5 1.06875 3.875 0 2.5 0ZM2.5 14.25C1.125 14.25 0 15.3188 0 16.625C0 17.9312 1.125 19 2.5 19C3.875 19 5 17.9312 5 16.625C5 15.3188 3.875 14.25 2.5 14.25Z"
          fill="#495057"
        />
      </svg>
    </div>

  </div>
  )
}

export default PostCard2Header