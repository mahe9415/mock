import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE, CREATE_LIST } from '../actions/actionTypes.js'
	


	const initialState = {
		places:[],
		selectedPlace:null
	}

	const reducer = (state = initialState , action) =>{
		switch (action.type) {
			case CREATE_LIST :
			return {
				...state,
				places:action.listItems,
				selectedPlace:null
			}
			break;
			case ADD_PLACE :
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
			break;
			case DELETE_PLACE : 
			return {
				...state,
				places : state.places.filter( item => item.key != state.selectedPlace.key ),
				selectedPlace : null
			}
			break;
			case SELECT_PLACE :
			return {
				...state,
				selectedPlace : action.placeKey
			}
			break;
			case DESELECT_PLACE :
			return {
				...state,
				selectedPlace:null
			}
			break;
			default:
				return state;
		}
	};


	export default reducer;