import React from 'react';
import ReactDOM from 'react-dom';
import './PostList.css';
import Post from '../Post/Post';

class PostList extends React.Component {
    render() {
        return (
            <div className="PostListContainer">
                {
                    this.props.posts.map(post => {
                        return(<Post post={post}
                            key={post.id} />)
                    })
                }
            </div>
        );
    }
}

export default PostList;