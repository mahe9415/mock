import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, TouchableOpacity, Button, BackHandler, ScrollView, FlatList, Image, Linking } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';
import storeConfig from '../../store/store';
import { Provider } from 'react-redux';
import { deselect } from '../../store/actions/places';
import AndroidBackButton from './util/AndroidBackButton';
import openMap from 'react-native-open-maps';

class ChooseMapModal extends React.Component{
	constructor(props){
		super(props)
	}

	componentDidMount(){
		console.log(this.props)
	}

	checkArgs(a,b,c,d){
		console.log(a,b,c,d)
	}
	render(){
		return(
			<View style={styles.container}>
			<View style={styles.modalbg}>
			<Text style={styles.txt} 
			// onPress = {e => console.log(this.props.event.coordinate)}
			onPress={e=>openMap(this.props.event.coordinate.latitude,this.props.event.coordinate.longitude)}
			>Google
			</Text>
			<Text style={styles.txt} 
			onPress={e=>Linking.openURL(`https://www.google.com/maps/dir/?api=1&origin=${this.props.coordinate.latitude},${this.props.coordinate.longitude}&destination=${this.props.event.coordinate.latitude},${this.props.event.coordinate.longitude}`)}
			>Apple 
			</Text>
			</View>
			</View>
			)
	}
}

const styles = StyleSheet.create({

	container:{
	    justifyContent: 'center',
	    alignItems: 'center',
	    position:"absolute",
	    top:0,
	    bottom:0,
	    flex:1,
	    width:"100%",
	    backgroundColor:"#FFFFFF90"
	},
	txt:{
		color:"red"
	},
	modalbg:{
		backgroundColor:"#000",
		opacity:1
	}
})

export default ChooseMapModal;