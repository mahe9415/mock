import MapView from 'react-native-maps';
import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, Button, ScrollView, FlatList, Platform, PermissionsAndroid } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import storeConfig from '../../store/store';
import { Provider } from 'react-redux';
import { selectPlaceAndNavigate, getList, deselect } from '../../store/actions/places';
import { getLocation } from '../../store/actions/currentLoc';
import AndroidBackButton from './util/AndroidBackButton';


class Mapify extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			place:null,
			region:{
				longitude:'',
				latitude:'',
				latitudeDelta:0.0922,
				longitudeDelta:0.0421,
			},
			loading:true
		}
	}


	async componentWillMount() {
if(Platform.OS === "android"){
	let check = await this.chechPremission()
	if(check) { this.requestLocationPermission(); }
}
		this.props.currentLoc();
			try{
			const selectedPlace = await AsyncStorage.getItem('selectedPlace');
			if(selectedPlace !== null){
			this.props.ListItems = Array.from(this.props.ListItems)
			let lat = Number(this.props.ListItems[this.props.selectedPlace].lat);
			let lan = Number(this.props.ListItems[this.props.selectedPlace].lan);
				this.setState({
					place:selectedPlace,
					region : {
						latitude: lat,
					    longitude: lan,
					    latitudeDelta: 0.0922,
					    longitudeDelta: 0.0421,
					},
					loading:false
				})
	}

			}

		catch(error) {
			console.log(error)
		}
}
	 	// this.watchId = await navigator.geolocation.watchPosition(
   //    	(position) => {

   //    	})\

async chechPremission(){
const checkify = await PermissionsAndroid.check(
	PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
	);
console.log(checkify)
return checkify;
}

 async requestLocationPermission() {
 	PermissionsAndroid
  	console.log("rewing")
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        'title': 'Cool Photo App Camera Permission',
        'message': 'Cool Photo App needs access to your camera ' +
                   'so you can take awesome pictures.'
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    	console.log(PermissionsAndroid)
    			
      console.log("You can use the camera")
    } else {
    	console.log(PermissionsAndroid)
      console.log("Camera permission denied")
    }
  } catch (err) {
    console.warn(err)
  }
}

	onRegionChange(region) {
  		this.setState({ region });
		}
	handleOnMapClick(e){
		this.props.navigator.showModal({
  screen: 'mock.ChooseMapModal', // unique ID registered with Navigation.registerScreen
  title: 'Modal', // title of the screen as appears in the nav bar (optional)
  passProps: {event:e.nativeEvent,coordinate:this.props.curLoc}, // simple serializable object that will pass as props to the modal (optional)
  animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
});
	}

	render() {
		if(this.state.loading){
			return (
				<Text>
				loading
			</Text>)
		}
    return (
      <View style ={styles.container}>
        <MapView
          style={styles.map}
          region={this.state.region}
          onRegionChange={()=>this.onRegionChange}
          >
    <MapView.Marker
      coordinate={
  		{
  			latitude: this.state.region.latitude,
  			longitude: this.state.region.longitude
		}
	}
      title={this.props.ListItems[this.props.selectedPlace].name}
      description={this.props.ListItems[this.props.selectedPlace].description}
      onPress={e => this.handleOnMapClick(e)}
    />
            </MapView>
      </View>
        )
}

}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position:"relative"
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});


const mapPropsToState = state => {
	return {
		selectedPlace : state.places.selectedPlace,
		ListItems: state.places.places,
		curLoc: state.currentLoc.coordinate
	}
}


const mapPropsToDispatch = dispatch => {
	return {
		deselect : () => dispatch(deselect()),
		currentLoc : () => dispatch(getLocation())
	}
}

export default connect(mapPropsToState,mapPropsToDispatch)(Mapify)
