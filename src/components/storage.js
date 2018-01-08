import React, { Component } from 'react'
import { AsyncStorage, Text, View, TextInput, StyleSheet } from 'react-native'

class AsyncStorageExample extends Component {
 
   constructor(props){
      super(props)
      this.state= {
         name:''
      }
      this.setName = this.setName.bind(this)
   }

   async componentDidMount(){
      // AsyncStorage.getItem('name').then((value) 
      // => this.setState({ 'name': value }))
         try {
                  const value = await AsyncStorage.getItem('name')
                  if (value !== null){
                  // We have data!!
                     this.setState({ 'name': value })
                     }
         } catch (error) {
            console.log(error)
           // Error retrieving data
         }
}
   setName(value){
      AsyncStorage.setItem('name', value);
      this.setState({ 'name': value });
   }

   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.textInput} value={this.state.name} autoCapitalize = 'none' 
               onChangeText = { (value) => this.setName(value)}/>
            <Text>
               {this.state.name}
            </Text>
         </View>
      )
   }
}
export default AsyncStorageExample

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 50
   },
   textInput: {
      margin: 15,
      height: 35,
      borderWidth: 1,
      backgroundColor: '#7685ed'
   }
})