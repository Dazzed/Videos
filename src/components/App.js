import React from "react";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import youtube from "../api/youtube";

const KEY = "AIzaSyBRb3-YuI-R-odAJUPDjcX0Oa4tnXMghzI";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSubmit('roses');
  }
  
  onSubmit = async (term) => {
    const results = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: "5",
        key: KEY,
        type: "video",
      },
    });
    this.setState({ videos: results.data.items, selectedVideo: results.data.items[0] });

  };

  OnSelectVideo = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onSelectVideo={this.OnSelectVideo}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
