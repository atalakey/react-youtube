import React from 'react';

const VideoDetail = (props) => {
  return (
    <div className="col-md-8 video-detail">
      <div className="embed-responsive embed-responsive-16by9">
        Video Player
      </div>
      <div className="details">
        <div>{props.video.title}</div>
        <div>{props.video.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
