import React, {Component} from 'react';


class  SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term:''};
    }

    render () {
        return (
            <div>
            <input  value={this.props.term} onChange = {this.props.handleChange} />
            <br/>
            value of the input: {this.props.term}
            </div>
        );
    }
    
}



export default SearchBar;


