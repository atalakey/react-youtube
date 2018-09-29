import React from 'react';

const VideoListItem = (props) => {
  return (
    <li onClick={() => props.onVideoSelect(props.video)}>
      <div>
        <div>
          <img src="/" alt="Some Pic" />
        </div>
        <div>
          <div>{props.video.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
