import React, { Component } from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';


import {selectBook} from '../actions/index';

class BookList extends Component {

    renderList () {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item" onClick={() => this.props.selectBook(book)}>{book.title}</li>
            );
        });
    }

    render () {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}


// this state is app state which get data from  rootReducer
function mapStateToProps (state) {
    // returned will show up as props inside of booklist
    return {
        books: state.books
    };
}

// anything returned from this function will end up as props on the booklist container
function mapDispatchToProps (dispatch) {
    // whenever selectBook is called, the result should be passed to all of our reducers
    return bindActionCreators({selectBook: selectBook},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);