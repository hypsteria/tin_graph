import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TinGraph from './components/TinGraph';
import graphApp from './reducers';

let store = createStore(graphApp);
console.log(store.getState());

const App = () => (
	<div>
		<TinGraph />
	</div>
);

render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('app')
);