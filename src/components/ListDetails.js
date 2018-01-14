import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, BackHandler, ScrollView, FlatList, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';
import storeConfig from '../../store/store';
import { Provider } from 'react-redux';
import { deselect } from '../../store/actions/places';
import AndroidBackButton from './util/AndroidBackButton';



class ListDetails extends React.Component{
	constructor(props){
		super(props)
		// console.log(this.props)
	}

	componentWillUnmount() {
	  	this.props.deselect()
   		}
   			onHwBack = () => {
		console.log("ListDetails")
		return false
	}

	pushSomeScreen = () => {
this.props.navigator.push({
  screen: 'mock.Login', // unique ID registered with Navigation.registerScreen
  title: "Loginu", // navigation bar title of the pushed screen (optional)
  // titleImage: require('../../img/my_image.png'), // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
  passProps: {}, // Object that will be passed as props to the pushed screen (optional)
  animated: true, // does the push have transition animation or does it happen immediately (optional)
  animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
  backButtonTitle: "Back", // override the back button title (optional)
  backButtonHidden: false, // hide the back button altogether (optional)
  navigatorStyle: {}, // override the navigator style for the pushed screen (optional)
  navigatorButtons: {}, // override the nav buttons for the pushed screen (optional)
  // enable peek and pop - commited screen will have `isPreview` prop set as true.
  previewView: undefined, // react ref or node id (optional)
  previewHeight: undefined, // set preview height, defaults to full height (optional)
  previewCommit: true, // commit to push preview controller to the navigation stack (optional)
  previewActions: [{ // action presses can be detected with the `PreviewActionPress` event on the commited screen.
    id: '', // action id (required)
    title: '', // action title (required)
    style: undefined, // 'selected' or 'destructive' (optional)
    actions: [], // list of sub-actions
  }]
});
	}
	render(){
		// console.log(this.props)
		if(!this.props.selectedPlace&& this.props.selectedPlace!==0){
			return (
				<Text> Loading </Text>
				)
		}
		return (
			<View>
			<Text>
				{this.props.ListItems[this.props.selectedPlace].description}
			</Text>
			<TouchableOpacity onPress={this.pushSomeScreen}>
			  <Image
          		style={{width: "100%", height: 300}}
          		source={{uri: this.props.ListItems[this.props.selectedPlace].image}}
        		/>
        		</TouchableOpacity>
        			<AndroidBackButton onPress={this.onHwBack}/>
			</View>
			)
	}
}




const mapPropsToState = state => {
	return {
		selectedPlace : state.places.selectedPlace,
		ListItems: state.places.places
	}
}


const mapPropsToDispatch = dispatch => {
	return {
		deselect : () => dispatch(deselect())
	}
}

export default connect(mapPropsToState,mapPropsToDispatch)(ListDetails)