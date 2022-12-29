import logo from '../../redditImage.png';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PostList from '../PostList/PostList';
import Post from '../Post/Post';
import Reddit from '../../util/Reddit';

/*main; the initial website screen that displays Reddit
posts based on search input -> search results
*/

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      postResults: []
    };
    this.search = this.search.bind(this);
  }

  search(term) {
    Reddit.search(term).then(postResults => {
      this.setState({postResults: postResults});
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <SearchBar onClick={this.search}/>
        </header>
        <SearchResults postResults={this.state.postResults}
            onAdd={this.addPost} />
      </div>
    );
  }
}

export default App;
