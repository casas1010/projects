export const addToList = (toDo) => {
    //alert('inside of addToList');
    return{
        type: "ADD_TO_LIST",
        payload: toDo
        
    };
}


export const removeFromList = (toDo) => {
    alert('inside of removeFromList');
    return{
        type: "REMOVE_FROM_LIST",
        payload: toDo
    };
}