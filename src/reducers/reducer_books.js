export default function (state = {title:'unknown'}, action) {
    console.log('reducer_books ',state, action);
    return [
        {title:'book1'},
        {title:'book2'},
        {title:'book3'},
        {title:'book4'}
    ];
}