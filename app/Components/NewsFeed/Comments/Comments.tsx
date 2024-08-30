import React from 'react'
import CommentInteractions from './CommentContainer/CommentInteractions/CommentInteractions'
import CommentBox from './CommentContainer/CommentBox/CommentBox'

const Comments = () => {
  return (
    <div className='flex font-medium flex-col'>
      <p className='text-2xl mb-4'>Comments(1.2k) </p>

      <div className="flex p-6 rounded-lg shadow-md ">
        <CommentBox />

      </div>
    </div>
  )
}

export default Comments