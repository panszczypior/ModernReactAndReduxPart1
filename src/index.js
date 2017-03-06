import ReactDOM from 'react-dom';
import React from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
const API_KEY = 'AIzaSyDfKr6CimYMl7rDg5bnYEZT-PNLjOBVOgU';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      videos: [],
      selectedVideo: null,
    };
    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      });
    })
  }

  render () {

    const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);

    return (
      <div>
        <SearchBar onSearchTermChange={term => videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({
            selectedVideo,
          })}/>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.querySelector('.container'));
