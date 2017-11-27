import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyC2OqHzQm94lz5_sGPKkpuz9OXMev3qfxg';

class  App extends Component {
  constructor(props) {
      super(props);

      this.state = {term:''};
  }

  render () {
      return (
        <div>hi!

          <SearchBar term={this.state.term}  handleChange={(event) => this.setState({term:event.target.value})}/>
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
