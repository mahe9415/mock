import react from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import storeConfig from './store/store';

const RNRedux = ()=> (
	<Provider store={storeConfig}>
		<App />
	</Provider>
	);

AppRegistry.registerComponent('mock', () => RNRedux);
