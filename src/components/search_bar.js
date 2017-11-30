import React, {Component} from 'react';


class  SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term:''};
    }

    render () {
        return (
            <div className="search-bar">
                <input  value={this.props.term} onChange = {this.props.handleChange} />
            </div>
        );
    }

}




export default SearchBar;


