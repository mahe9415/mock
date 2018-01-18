import { SET_CUR_LOC } from '../actions/actionTypes.js';
import { AsyncStorage } from 'react-native';
import { Navigation } from 'react-native-navigation';
import startTabApp from '../../App.js'
import store from '../store'
const initialState = {
	coordinate:{
		latitude:0.01,
		longitude:0.01,
		latitudeDelta:0.0922,
		longitudeDelta:0.0421
	},
	error:null,
	last_update:null
}

const reducer = (state=initialState, action) => {
	switch (action.type) {
		case SET_CUR_LOC :
		if(action.action.error){
			return {
				...state,
				error:action.action.error,
				last_update:action.action.updated_at
			}
		}
		return{
			...state,
			coordinate:{
				latitude:action.action.coordinate.latitude|| 0.01,
				longitude:action.action.coordinate.longitude|| 0.01,
				latitudeDelta:0.0922,
				longitudeDelta:0.0421
			},
			error:action.action.error,
			last_update:action.action.updated_at
		}
		break;
		default :
		return state;
		break;
	}
}

export default reducer
