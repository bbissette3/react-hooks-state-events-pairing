import { useState } from "react";
import video from "../data/video.js";
import VideoContainer from "./VideoContainer"
import LikesContainer from "./LikesContainer.js";
import CommentsContainer from "./CommentsContainer.js";

function App() {

  //states to be used in LikesContainer
  const [upvotes, setUpvotes] = useState(video.upvotes)
  const [downvotes, setDownVotes] =useState(video.downvotes)

  return (
    <div className="App">
      <VideoContainer 
        title={video.title}
        embedUrl={video.embedUrl} 
        views={video.views} 
        createdAt={video.createdAt}
      />
      <LikesContainer 
        upvotes={upvotes} 
        setUpVotes={setUpvotes} 
        downvotes={downvotes} 
        setDownVotes={setDownVotes}
      />
      <CommentsContainer comments={video.comments} />
    </div>
  );
}

export default App;
