import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, BackHandler, ScrollView, FlatList, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';
import storeConfig from '../../store/store';
import { Provider } from 'react-redux';
import { deselect } from '../../store/actions/places';



class ListDetails extends React.Component{
	constructor(props){
		super(props)
		// console.log(this.props)
	}

	componentWillUnmount() {
	  	this.props.deselect()
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
			  <Image
          		style={{width: "100%", height: 300}}
          		source={{uri: this.props.ListItems[this.props.selectedPlace].image}}
        		/>
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