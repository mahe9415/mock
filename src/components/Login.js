import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import { Input, Button } from '../UI/common';
import startTabApp from '../../App'
import { Login } from '../../store/actions/places';
class LoginM extends React.Component{
	
	constructor(props){
		super(props);
		this.state={
			email:null,
			password:null
		}
		this._handlePasswordText = this._handlePasswordText.bind(this);
		this._handleEmailText = this._handleEmailText.bind(this);
		this._handleLogin = this._handleLogin.bind(this);

	}

		_handleEmailText(value){
			this.setState({
				email:value
			})
		}

		_handlePasswordText(value){
			this.setState({
				password:value
			})
		}

		_handleLogin(){
			this.props.LoginUser(this.state.email,this.state.password)
		}
	

	render(){
		return (
			<View style={{flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'}}>
			<View style={{flex:1, alignItems:"center", maxHeight:"28%" }}>
			<Input label="Email" placeholder="Email" onChangeText={this._handleEmailText}/>
			<Input label="Password" placeholder="password" secureTextEntry onChangeText={this._handlePasswordText}/>
			<Button onPress={this._handleLogin}>
			 Login
			</Button>
			</View>
		 </View>
			)
	}

}


const mapPropsToState = state =>{
	return {}
}

const mapPropsToDispatch = dispatch => {
	return{
	LoginUser:(email,password) => dispatch(Login(email,password))
}
}

export default connect(mapPropsToState,mapPropsToDispatch)(LoginM)