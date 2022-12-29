import React from 'react';
import ReactDOM from 'react-dom';
import './Post.css'
import commentImg from './commentImg.png';
import postImg from './books.jpg';
import noImage from './noImage.png';

import {BsFillArrowDownSquareFill, BsFillArrowUpSquareFill} from "react-icons/bs";


class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vote: '',
            clickedUp: false
        }

        this.voteYes = this.voteYes.bind(this);
        this.voteNo = this.voteNo.bind(this);
    }

    voteYes() {
        this.setState({vote: 'yes'})

        if(!this.state.clickedUp) {
            this.props.post.score += 1;
            this.state.clickedUp = true;
        }
        
    }

    voteNo() {
        this.setState({vote: 'no'})
        if(!this.state.clickedUp) {
            this.props.post.score += 1;
            this.state.clickedUp = true;
        }

    }

    render() {
        return (
            <div className="PostContainer">
                <div className="Votes">
                    <button id='yes' onClick={this.voteYes}>
                        <BsFillArrowUpSquareFill size="2.5em"/>
                    </button>
                    <p>{this.props.post.score}</p>
                    <button id='no' onClick={this.voteNo}><BsFillArrowDownSquareFill size="2.5em"/></button>
                </div>
                <div className="Post">
                    <h2>{this.props.post.title.length > 51 ? this.props.post.title.slice(0, 51) + "..." : this.props.post.title}</h2>
                    <img src={this.props.post.url} alt="no post image" onerror={noImage}/>
                </div>
                <div className="Account">
                    <p>Posted by</p>
                    <span>{this.props.post.name}</span>
                </div>
                <div className="Info">
                    <p>{/*date here*/}</p>
                    <div className="Comments">
                        <h3>{this.props.post.num_comments}</h3>
                        <img src={commentImg} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;