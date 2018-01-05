import { createStore, combineReducers, compose } from 'redux';

import placesReducer from './reducers/places';

const rootReducres = combineReducers({
	places:placesReducer
})

let componeEnhacers =  compose;

if(__DEV__){
	componeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const storeConfig = () => {
	return createStore(rootReducres,componeEnhacers()) 
}


export default storeConfig;