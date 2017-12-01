import {combineReducers} from 'redux';

import BooksReducer from "./reducer_books";
import ActiveBook from "./reducer_active_book";

//action will go though all reducer like filter chain
const rootReducer = combineReducers ({
    books:BooksReducer,
    activeBook:ActiveBook
});

export default rootReducer;