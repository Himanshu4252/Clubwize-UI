import React from 'react'
import ImageCircle from './ImageCircle/ImageCircle'
import image from '../../../../public/img/image.png'

const OnBoardLeft = () => {
  return (
    <div className='relative w-full h-full flex  flex-col justify-center items-center'>
      <h2 className="text-2xl font-bold">
        Start Your Journey 🥳
      </h2>
      <p className='w-full md:max-w-[60%] text-center mt-4 text-gray-500'>
      Lorem ipsum dolor sit amet consectetur. Vitae anunc volutpat enim ac. Lorem ipsum dolor sit.
      </p>

      <div className="mt-8 flex flex-nowrap flex-row justify-center items-center">
      <a className='text-xl font-bold'>
        Learn More 
        <span>
          {/* left arrow in round border */}
          <div className=" border border-black"></div>
           </span>
      </a>
      <span className='rounded-full border border-black w-5 h-5 ml-4 '>  7 </span>
      </div>
          <div className="absolute  w-full h-[25vh] flex justify-around item-center px-4 mt-4 translate-y-64">
          <div className='self-end'>
          <ImageCircle imgSrc={image} imgWidth='14' imgHeight='14'/>
          </div>
          <div className='self-start'>
          <ImageCircle imgSrc={image} />
          </div>
          <div className='self-end'>
          <ImageCircle imgSrc={image} imgWidth='14' imgHeight='14' />
          </div>
          <div className='self-start'>
          <ImageCircle imgSrc={image} />
          </div>
          </div>
    </div>
  )
}

export default OnBoardLeft