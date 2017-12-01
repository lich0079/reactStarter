import React, {Component} from 'react';

import Booklist from '../containers/book_list';
import Bookdetail from '../containers/book_detail';



export default class App extends Component {

    render () {
        return (
            <div>
                <Bookdetail />
                <Booklist />
            </div>
        );
    }
}