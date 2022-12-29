import React from 'react';
import ReactDOM from 'react-dom';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    search() {
        this.props.onClick(this.state.term);
    }

    handleTermChange(e) {
        this.setState({term: e.target.value});
    }

    render() {
        return(
        <div className="SearchBar">
            <input placeholder="Enter a topic"
                onChange={this.handleTermChange}/>
            <button type="button" value="SEARCH" onClick={this.search}></button>
        </div>
        );
    }
}

export default SearchBar;