import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onSelectVideo }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        onSelectVideo={onSelectVideo}
        key={video.id.videoId}
        video={video}
      ></VideoItem>
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
