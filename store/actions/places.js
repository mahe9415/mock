import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE, CREATE_LIST } from './actionTypes.js'
import { AsyncStorage } from 'react-native';
import { Navigation } from 'react-native-navigation';
import startTabApp from '../../App.js'
import store from '../store'

import axios from 'axios';

export const addPlace = placeName => {
	return {
		type: ADD_PLACE,
		placeName:placeName
	}
}

export const deletePlace = () => {
	return{
		type:DELETE_PLACE
	}
}


export const selectPlace = key => {
	return{
		type:SELECT_PLACE,
		placeKey:key
	}
}


export const deselect = () => {
	AsyncStorage.removeItem('selectedPlace')
	return{
		type:DESELECT_PLACE
	}
}


export const loadPlaces = listArray => {
	// console.log("loading")
	return{
		type:CREATE_LIST,
		listItems:listArray
	}
}



export const Login = (email,password) => dispatch  => {
	axios({url:'http://demo7755415.mockable.io/login?email="mahesh@gmail.com"&password="1234"',method:'post'}).then( data  => {
		if(data.status){
			dispatch(getList())	
		}
		else{
			console.warn(data)
		}
	}).catch(err => {
		console.log(err)
	})
}

export const savePlace = async places => {
	await AsyncStorage.setItem('places', JSON.stringify(places));
	return
}

export const saveSelectPlace = async key => {
	console.log("save selectedPlace")
	try{
	 await AsyncStorage.setItem('selectedPlace',key.toString())
	}
	catch(error){
		console.log(error);
	}
	return
}
export const getList = () => dispatch => {
	axios({
		url:'https://demo7755415.mockable.io/place/1',
		method:'get'
	}).then(res =>{
		res.data=Array.from(res.data)
		dispatch(loadPlaces(res.data))
		savePlace(res.data)
			// startTabApp()

	}).catch(err=>console.log(error))
}


export const selectPlaceAndNavigate = (key,item,nav) => dispatch => {
	dispatch(selectPlace(key))
	saveSelectPlace(key)
}

// export const deSelectPlaceAndNavigate = (key)
