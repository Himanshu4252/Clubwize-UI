import React from 'react'
import Image from 'next/image'
import Background from '../../../../../public/img/PostCard2/Background.png'
import CardImage from '../../../../../public/img/PostCard2/CardImage.png'


const PostCard2Content = () => {
  return (
    <div className='relative flex flex-col justify-center items-center h-full'>

        <div className="flex flex-col text- justify-center items-center z-1">

            <div className="flex rounded-full ">
              <Image className='rounded-full w-[123px] h-[123px]  mt-4' src={CardImage} alt="CardImage"/>
            </div>

            <div className="w-full text-center mt-4">
                <p className="text-xl font-semibold">Cameron Williamson</p>
            </div>
            <div className="w-full text-gray-600 text-center mb-4">
                <p className="text-lg font-normal">Joined Gretchen Lehner node</p>
            </div>
            <div className="w-fit inline-flex justify-between items-center text-center gap-4">
                <div className="w-full  px-4 py-1 bg-black rounded-lg border border-black text-white">
                    <p className="text-md font-normal">View Profile</p>
                </div>
                <div className="w-1/2  px-4 py-1 rounded-lg border text-gray-800 border-gray-400">
                    <p className="text-md font-normal">Message</p>
                </div>
            </div>
        </div>
        {/* <Image className='' src={Background} alt="Background"/> */}
        <div className="w-full h-full absolute bg-[url('/img/PostCard2/Background.png')] z-[-1]"></div>
    </div>
  )
}

export default PostCard2Content