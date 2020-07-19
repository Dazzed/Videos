import React from "react";
import './VideoItem.css'

class VideoItem extends React.Component {
  render() {
    const { id, snippet } = this.props.video;
    const { video, onSelectVideo } = this.props;
    return (
      <div className="video-item item" onClick={()=>onSelectVideo(video)}>
        <img className="ui image" src={snippet.thumbnails.medium.url} />
        <div className="content">
          <div className="header">{snippet.title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
