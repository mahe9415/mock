import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes.js'
	


	const initialState = {
		places:['chennai'],
		selectedPlace:null
	}

	const reducer = (state = initialState , action) =>{
		switch (action.type) {
			case ADD_PLACE :
			console.log(action)
			return {
				...state,
				places:state.places.concat({
					name:action.placeName,
					key:Math.random(),
					image:{
						url:"https://developers.giphy.com/static/img/sample_emoji.002b24a680c8.png"
					}
				})
			}
			case DELETE_PLACE : 
			return {
				...state,
				places : state.places.filter( item => item.key != state.selectedPlace.key ),
				selectedPlace : null
			}
			case SELECT_PLACE :
			return {
				...state,
				selectedPlace : state.places.find( item => item.key === action.placeKey)
			}

			case DESELECT_PLACE :
			return {
				...state,
				selectedPlace:null
			}
			default:
				return state;
		}
	};


	export default reducer;