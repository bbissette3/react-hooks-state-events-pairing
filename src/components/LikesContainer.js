import React from 'react'

const LikesContainer = ({ upvotes, setUpVotes, downvotes, setDownVotes }) => {

  

  const handleButtonClick = (e) => {
    e.target.name === "+" ? setUpVotes(upvotes + 1) : setDownVotes(downvotes + 1)
  }

  return (
    <div>
        <button name="+" onClick={handleButtonClick}>{upvotes} 👍</button>
        <button name="-" onClick={handleButtonClick}>{downvotes} 👎</button>
    </div>
  )
}

export default LikesContainer;