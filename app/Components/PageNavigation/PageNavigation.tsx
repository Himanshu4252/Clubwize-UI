import React from 'react'

const PageNavigation = () => {
  return (
    <div className='flex flex-col justify-between items-center border-2 p-4 list-none gap-2 w-full'>
        <a className="bg-gray-600 text-white p-2 px-4 rounded-lg" href="/onboarding"><li>Onboarding</li></a>
        <a className="bg-gray-600 text-white p-2 px-4 rounded-lg" href="/Other/GroupChat"><li>GroupChat</li></a>
        <a className="bg-gray-600 text-white p-2 px-4 rounded-lg" href="/Other/Message"><li>Message</li></a>
        <a className="bg-gray-600 text-white p-2 px-4 rounded-lg" href="/Feed"><li>Feed</li></a>
        {/* <a href=""><li></li></a> */}
        
    </div>
  )
}

export default PageNavigation