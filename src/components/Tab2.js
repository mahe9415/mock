import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';


import { connect } from 'react-redux'
import { addPlace } from '../../store/actions/places'

// const addPlace = ()=>{
//   console.log("r")
// }

class Home extends React.Component{ 
  constructor(props){
    super(props);
  }

  componentDidMount(){
    // this.props.logTheAction('Palani');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'red'}}>
          Tab2
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
