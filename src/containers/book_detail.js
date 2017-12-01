import React, { Component } from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';


import {selectBook} from '../actions/index';

class BookDetail extends Component {
    render () {
        return (
            <div>Book detail {this.props.book.title}</div> 
        );
    }
}

// this state is app state which get data from  rootReducer
function mapStateToProps (state) {
    // returned will show up as props inside of booklist
    return {
        book: state.activeBook
    };
}

// // anything returned from this function will end up as props on the booklist container
// function mapDispatchToProps (dispatch) {
//     // whenever selectBook is called, the result should be passed to all of our reducers
//     return bindActionCreators({selectBook: selectBook},dispatch);
// }

export default connect(mapStateToProps)(BookDetail);


// export default BookDetail;