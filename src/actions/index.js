
export function  selectBook (book) {
    // this is an actionCreator, it need to return an action, obj with  type property
    return {
        type: 'BOOK_SELECTED',
        payload:book
    };
}