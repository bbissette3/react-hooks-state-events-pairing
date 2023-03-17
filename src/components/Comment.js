import React from 'react'

const Comment = ({ user, comment }) => {
  return (
    <div>
        <h3>{user}</h3>
        <p>{comment}</p>
    </div>
  )
}

export default Comment;