import { combineReducers } from 'redux';


const addToListReducer = (state = [], action) => {
    switch (action.type) {

        case "ADD_TO_LIST":
            //alert("inside of addToListReducer, add");
            return [...state, action.payload]

        case "REMOVE_FROM_LIST":
            //alert("inside of addToListReducer, remove");
            return state.filter(element => element !== action.payload)

        default:
            return state
    };
};

const reducers = combineReducers({
    reducer: addToListReducer
});

export default reducers;