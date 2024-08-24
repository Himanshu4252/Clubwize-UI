import React from 'react'
import ImageCircle from './ImageCircle/ImageCircle'
import image from '../../../../public/img/image.png'
import vector1 from '../../../../public/img/Vector1.png' 
import user1 from '../../../../public/img/user1.png'
import user2 from '../../../../public/img/user2.png'
import user3 from '../../../../public/img/user3.png'
import user4 from '../../../../public/img/user4.png'
import Image from 'next/image'


const OnBoardLeft = () => {
  return (
    <div className='relative bg-onboarding-bg w-full h-full flex  flex-col justify-center items-center'>
      <div className="absolute top-0 right-0">
      <Image src={vector1} alt="vector"/>
      </div>
      <h2 className="text-2xl font-bold">
        Start Your Journey 🥳
      </h2>
      <p className='w-full md:max-w-[60%] text-center mt-4 text-gray-500'>
      Lorem ipsum dolor sit amet consectetur. Vitae anunc volutpat. Lorem ipsum dolor sit.
      </p>

      <div className="mt-8 justify-center items-center ">
      <a className='text-xl inline-flex gap-2 items-center font-bold underline  '>
        Learn More
        <span><svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0.25C5.78692 0.25 0.75 5.28692 0.75 11.5C0.75 17.7131 5.78692 22.75 12 22.75C18.2131 22.75 23.25 17.7131 23.25 11.5C23.25 5.28692 18.2131 0.25 12 0.25ZM12 20.875C6.82245 20.875 2.62501 16.6775 2.62501 11.5C2.62501 6.32245 6.82245 2.12501 12 2.12501C17.1775 2.12501 21.375 6.32245 21.375 11.5C21.375 16.6775 17.1775 20.875 12 20.875Z" fill="#212529"/>
<path d="M10.7879 6.14958C10.4218 5.78347 9.82819 5.78347 9.46208 6.14958C9.09597 6.51569 9.09597 7.1093 9.46208 7.47541L13.4867 11.5L9.46208 15.5246C9.09597 15.8907 9.09597 16.4843 9.46208 16.8504C9.82819 17.2165 10.4218 17.2165 10.7879 16.8504L15.4754 12.1629C15.8415 11.7968 15.8415 11.2032 15.4754 10.8371L10.7879 6.14958Z" fill="#212529"/>
</svg></span>
 
      </a>

      </div>
          <div className="absolute  w-full h-[25vh] flex justify-around item-center px-4 mt-4 translate-y-64">
          <div className='self-end'>
          <ImageCircle imgSrc={user1} imgWidth='14' imgHeight='14'/>
          </div>
          <div className='self-start'>
          <ImageCircle imgSrc={user2} />
          </div>
          <div className='self-end'>
          <ImageCircle imgSrc={user3} imgWidth='14' imgHeight='14' />
          </div>
          <div className='self-start'>
          <ImageCircle imgSrc={user4} />
          </div>
          </div>
    </div>
  )
}

export default OnBoardLeft