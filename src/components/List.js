import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, BackHandler, ScrollView, FlatList } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';
import storeConfig from '../../store/store';
import { Provider } from 'react-redux';
import { selectPlaceAndNavigate } from '../../store/actions/places';


class ListItems extends React.Component{
	constructor(props){
		super(props)
		this.generateList = this.generateList.bind(this);
		this.selectPlaceAndNavigate = this.selectPlaceAndNavigate.bind(this);
		// this._keyExtractor=this._keyExtractor.bind(this);
	}

	componentDidMount(){
		console.log(this.props)
	}


	
selectPlaceAndNavigate(key,item){
	this.props.navigator.push({
  screen: 'mock.ListDetails', // unique ID registered with Navigation.registerScreen
  title: item.name, // navigation bar title of the pushed screen (optional)
  // titleImage: require('../../img/my_image.png'), // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
  // passProps: {}, // Object that will be passed as props to the pushed screen (optional)
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
  }],
});

			this.props.selectPlaceAndNavigate(key,item)
		  // _keyExtractor = (item, index) => index;
		}

	generateList(Item) {
		if(!Item){
			return
		}
		return(
			<TouchableOpacity onPress={(e)=>this.selectPlaceAndNavigate(Item.index,Item.item)}>
			<View style={styles.card} key={Item.index}>
			<Text style={styles.cardTitle}> { Item.item.name } </Text>
			<Text> {Item.item.description }</Text>
			</View>
			</TouchableOpacity>
		)
	}


	render(){
		return(
			<View style={styles.container}>
			<ScrollView>
			<FlatList data={this.props.ListItems}
			          // keyExtractor={this._keyExtractor}
					  renderItem={item => this.generateList(item)}
					  />
			</ScrollView>
			</View>
			)
	}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle:{
  	fontSize:24,
  	flex:1,
  	marginBottom:10
  },
  card:{
  	borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
});


const mapPropsToState = state => {
	return {
		ListItems : state.places.places,
		selectedPlace:state.selectedPlace
	}
}


const mapPropsToDispatch = dispatch => {
	return {
		selectPlaceAndNavigate : (key,item,nav) => {
			dispatch(selectPlaceAndNavigate(key,item,nav))
		}
	}
}
export default connect(mapPropsToState,mapPropsToDispatch)(ListItems)