import React from 'react';
import ReactDOM from 'react-dom';
import {createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import TrafficLights from './components/TrafficLights';
import ChangeAllTrafficLights from './components/ChangeAllTrafficLights';

const store = createStore(reducer);

//yarn add react-redux
/*

state = {
	trafficLights: [0,0,0]
	pmt: [
	{
	id: 1,
	name: 'Sammuel',
	age: 30,
	},
	]
	pmtToTrafficLights: [{
	5: 2,
	3: 4,
	}]
};
'TRAFFIC_LIGHT_ADDED'
'TRAFFIC_LIGHT_CHANGED', index
'ALL_TRAFFIC_LIGHTS_CHANGED'

'PMT_AGENT_ADDED'
'PMT_AGENT_CHANGED'

'TRAFFIC_lIGHT_PMT_AGENT_ASSIGNED',
payload: {
	pmt:5
	trafficLight: 2
}


'TRAFFIC_lIGHT_PMT_AGENT_UNASSIGNED'

Acciones en mayusculas y pasado perfecto

payload es una convencion para definir que esta funcion necesita un indice(parametro) para una accion

pmt:{
	byId:{
	1: {
	{
	id: 1,
	name: 'Sammuel',
	age: 30,
	}
	}
	en que orden vino del servidor
	order: [1]
	}
}*/

const App = () => (
	<Provider store={store}>
	<TrafficLights />
	<ChangeAllTrafficLights />
	</Provider>
);

ReactDOM.render(
	<App />,
	document.getElementById('root'),
);

//Instalar moment JS
//yarn add lodash
/*eghead
Ver videos
Building React Aplications with Idiomatic Redux
*/
