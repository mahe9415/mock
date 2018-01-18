import { SET_CUR_LOC } from './actionTypes.js'

export const setLocation = (curLoc) => {
	return {
		type: SET_CUR_LOC,
		action: curLoc
	}
}

export const getLocation = () => async dispatch => {
	let watchId;
    try {
       watchId = await navigator.geolocation.getCurrentPosition(
        (position) => {

          const coordinate = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          };
          let updated_at = new Date().toLocaleString();
          let error = null;

          let curLoc = {
          	coordinate,
          	error,
          	updated_at
          }
          console.warn(curLoc)
          dispatch(setLocation(curLoc))
        },
        (error) => {
        	console.warn(error)
        	error = {
        		error:error.message,
        		updated_at :new Date().toLocaleString()
        	} 
        	dispatch(setLocation(error))
          //TODO: better design
          // switch (error.code) {
          //   case 1:
          //     if (Platform.OS === "ios") {
          //       Alert.alert("", "Para ubicar tu locación habilita permiso para la aplicación en Ajustes - Privacidad - Localización");
          //     } else {
          //       Alert.alert("", "Para ubicar tu locación habilita permiso para la aplicación en Ajustes - Apps - ExampleApp - Localización");
          //     }
          //     break;
          //   default:
          //     Alert.alert("", "Error al detectar tu locación");
          // }
      },
      { enableHighAccuracy: true, timeout: 20000, distanceFilter: 10 },
      );
    } catch(e) {
      alert(e.message || "");
    }
  }
