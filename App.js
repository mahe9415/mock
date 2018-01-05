import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { connect } from 'react-redux'
import { addPlace } from './store/actions/places'


class App extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.logTheAction('Palani');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>hello</Text>
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


export default connect(mapPropsToState,mapPropsToDispatch)(App)
