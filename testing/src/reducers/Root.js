import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//import reduxPromise from 'redux-promise';
import async from '../components/middlewares/async'
import reducers from 'reducers';
import stateValidator from '../components/middlewares/stateValidator';


export default ({ children, initialState = {} }) => {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(async,stateValidator)
    );
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}

