import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import placesReducer from './reducers/places';

const rootReducres = combineReducers({
	places:placesReducer
})

let componeEnhacers =  compose;

if(__DEV__){
	componeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const storeConfig = () => {
	return createStore(rootReducres ,componeEnhacers(applyMiddleware(thunk))) 
}


export default storeConfig;