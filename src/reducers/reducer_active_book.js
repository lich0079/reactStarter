
// state is not app state, only the state this reducer is resp for
// state is previous state
export default function (state = {title:'unknown'}, action) {
    console.log('reducer_active_book ',state, action);
    switch (action.type){
        case 'BOOK_SELECTED':
        return action.payload;
    }
    return state;
}