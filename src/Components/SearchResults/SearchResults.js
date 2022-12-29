/*change from Spotify to Reddit*/

import React from 'react';
import ReactDOM from 'react-dom';
import './SearchResults.css';
import PostList from '../PostList/PostList';

class SearchResults extends React.Component {
    render() {
        return(
        <div className="SearchResults">
            <PostList posts={this.props.postResults}/>
        </div>
        );
    }
}

export default SearchResults;