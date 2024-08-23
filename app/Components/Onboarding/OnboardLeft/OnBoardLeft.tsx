import React from 'react'
import ImageCircle from './ImageCircle/ImageCircle'
import image from '../../../../public/img/image.png'

const OnBoardLeft = () => {
  return (
    <div className='relative bg-onboarding-bg w-full h-full flex  flex-col justify-center items-center'>
      <h2 className="text-2xl font-bold">
        Start Your Journey 🥳
      </h2>
      <p className='w-full md:max-w-[60%] text-center mt-4 text-gray-500'>
      Lorem ipsum dolor sit amet consectetur. Vitae anunc volutpat. Lorem ipsum dolor sit.
      </p>

      <div className="mt-8 flex flex-nowrap flex-row justify-center items-center">
      <a className='text-xl font-bold underline'>
        Learn More 
      </a>

      </div>
          <div className="absolute  w-full h-[25vh] flex justify-around item-center px-4 mt-4 translate-y-64">
          <div className='self-end'>
          <ImageCircle imgSrc={image} imgWidth='16' imgHeight='16'/>
          </div>
          <div className='self-start'>
          <ImageCircle imgSrc={image} />
          </div>
          <div className='self-end'>
          <ImageCircle imgSrc={image} imgWidth='16' imgHeight='16' />
          </div>
          <div className='self-start'>
          <ImageCircle imgSrc={image} />
          </div>
          </div>
    </div>
  )
}

export default OnBoardLeft