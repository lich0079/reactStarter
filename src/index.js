import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyC2OqHzQm94lz5_sGPKkpuz9OXMev3qfxg';



class  App extends Component {
  constructor(props) {
      super(props);

      this.state = {
        videos:[],
        selectedVideo:null
      };

      this.searchVideo('silk');
  }

  handleSearchBar (term) {
    this.setState({term:term});

    const videoSearch = _.debounce((term) => {this.searchVideo(term)},300);
    videoSearch(term);
  }

  searchVideo (term) {
    YTSearch({key:API_KEY,term:term},(videos) => {
      console.log(videos);
      this.setState({
        videos:videos,
        selectedVideo:videos[0]
      });
    });
  }

  render () {
      
      return (
        <div>hi!

          <SearchBar term={this.state.term}  handleChange={(event) => this.handleSearchBar(event.target.value)}/>
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList videos={this.state.videos} onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}/>
        </div>
      );
  }

  handleChange(event) {
      this.setState({
          term:event.target.value
      });
  }
}

ReactDOM.render(
    <App />
  , document.querySelector('.container'));
