export default ({ dispatch }) => (next) => (action) => {
    //check to see if the action has a promise on its 'payload' property
    //if it does, then wait for it to resolve
    //if it does not, then send the action to the 
    //next middleware
    
    if (!action.payload || !action.payload.then) {
        return next(action);
    }
    // we want to wait for the promise to resolve (get its data) and then create a new action
    // with the data and dispatch it

    action.payload.then(function (response) {
        const newAction = { ...action, payload: response };
        dispatch(newAction);
    });

};

/*
 MIDDLEWARE SYNTAX
export default function ({ dispatch }) { //

    return function (next) { //next is a reference to the enxt middleware in the chain

        return function (action) { //

        }
    }
}

SAME AS


export default ({ dispatch }) =>  /(next) =>    (action) => { }

*/