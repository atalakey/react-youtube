import React from 'react';

const VideoDetail = (props) => {
  return (
    <div>
      <div>
        Video Player
      </div>
      <div>
        <div>{props.video.title}</div>
        <div>{props.video.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
