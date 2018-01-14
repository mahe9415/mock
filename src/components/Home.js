import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';
import storeConfig from '../../store/store';
import { Provider } from 'react-redux';
import { addPlace } from '../../store/actions/places';


import { startSingleScreenApp } from '../../App.js'
// import Icon from 'react-native-vector-icons/Ionicons';
// const addPlace = ()=>{
//   console.log("r")
// }

const store = storeConfig();

class Home extends React.Component{ 

  constructor(props){
    super(props);
    this.onPressLearnMore = this.onPressLearnMore.bind(this);
    this.state ={
      listScreenId:null
    }
  }

  componentDidMount(){
    let navigator = this.props.navigator
    // this.setState({icon:)};
  //   // this.props.logTheAction('Palani');
  //   BackHandler.addEventListener('hardwareBackPress', function(navigator) {
  //     console.log(navigator)
  //   navigator.pop({
  //   animated: true, // does the pop have transition animation or does it happen immediately (optional)
  //   animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the pop have different transition animation (optional)
  //   });
  //   console.log(this.props.navigator || 'no no')
  //   return true
  // })
  }




  onPressLearnMore(){
    startSingleScreenApp()

    // Promise.all([
    //   Icon.getImageSource("md-map",30),
    //    Icon.getImageSource("md-map",30)
    //   ]).then(icon => {
    //         this.props.navigator.push({
    //               screen:"mock.Tab2",
    //               title:"From method",
    //               icon:icon[0],
    //                passProps: {store,Provider},
    // })
    //   })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'red'}}>
          Hello  
        </Text>
        <TouchableOpacity >
       <Button
          onPress={this.onPressLearnMore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const mapPropsToState = state => 
{
return {
  places:state.places
}
}
const mapPropsToDispatch = dispatch => {
  return{
  logTheAction :(placeName) => dispatch(addPlace(placeName))
}
}


export default connect(mapPropsToState,mapPropsToDispatch)(Home)
