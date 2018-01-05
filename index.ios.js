import react from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/store';

const RNRedux = ()=> (
	<Provider store={store}>
		<App />
	</Provider>
	);

AppRegistry.registerComponent('mock', () => RNRedux);
