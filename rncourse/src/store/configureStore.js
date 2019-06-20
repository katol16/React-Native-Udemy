import { createStore, combineReducers, compose } from 'redux';

import placesReducers from './reducers/places'

const rootReducer = combineReducers({
    places: placesReducers
});

// Poniżej mamy prosty store, który po prostu przyjmuje reducer jako parametr
// const configureStore = () => {
//     return createStore(rootReducer);
// };

let composeEnhancers = compose;

// if (__DEV__) -> true if You are in development mode
if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers());
};

export default configureStore;