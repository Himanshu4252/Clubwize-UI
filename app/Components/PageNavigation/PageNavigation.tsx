import Link from 'next/link'
import React from 'react'

const PageNavigation = () => {
  return (
    <div className='flex flex-col justify-between items-center border-2 p-4 list-none gap-2 w-full '>
        <Link className="bg-gray-600 text-white p-2 px-4 rounded-lg" href="/"><li>Home</li></Link>
        <Link className="bg-gray-600 text-white p-2 px-4 rounded-lg" href="/onboarding"><li>Onboarding</li></Link>
        <Link className="bg-gray-600 text-white p-2 px-4 rounded-lg" href="/main/Feed"><li>Feed</li></Link>
        <Link className="bg-gray-600 text-white p-2 px-4 rounded-lg" href="/Other/GroupChat"><li>GroupChat</li></Link>
        <Link className="bg-gray-600 text-white p-2 px-4 rounded-lg" href="/Other/Message"><li>Message</li></Link>
        <Link className="bg-gray-600 text-white p-2 px-4 rounded-lg" href="/Other/BookMarks"><li>Bookmarks</li></Link>
        <Link className="bg-gray-600 text-white p-2 px-4 rounded-lg" href="/main/Debate"><li>Debate</li></Link>
        {/* <a href=""><li></li></a> */}
        
    </div>
  )
}

export default PageNavigation
