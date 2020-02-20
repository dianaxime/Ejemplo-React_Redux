/*

state = [0,0,0];
'TRAFFIC_LIGHT_ADDED'
'TRAFFIC_LIGHT_CHANGED', index
'ALL_TRAFFIC_LIGHTS_CHANGED'
Acciones en mayusculas y pasado perfecto

payload es una convencion para definir que esta funcion necesita un indice(parametro) para una accion

*/

import {createStore} from 'redux';

const trafficLights = (state = [], action) => {
	switch(action.type) {
		case 'TRAFFIC_LIGHT_ADDED':{
			return [...state, 0];
		}
		case 'TRAFFIC_LIGHT_CHANGED':{
			const newState = [...state];
			newState[action.payload] = (newState[action.payload] + 1) % 3;
			return newState;
		}
		case 'ALL_TRAFFIC_LIGHTS_CHANGED':{
			return state.map(i => (i + 1) % 3);
		}
		//TOTALMENTE NECESARIO AGREGAR EL DEFAULT
		default:{
			return state;
		}
	}
};

const store = createStore(trafficLights);

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: 'TRAFFIC_LIGHT_ADDED' });
store.dispatch({ type: 'TRAFFIC_LIGHT_ADDED' });
store.dispatch({ type: 'TRAFFIC_LIGHT_ADDED' });
store.dispatch({ type: 'TRAFFIC_LIGHT_ADDED' });

store.dispatch({ type: 'TRAFFIC_LIGHT_CHANGED', payload: 0});
store.dispatch({ type: 'TRAFFIC_LIGHT_CHANGED', payload: 0});
store.dispatch({ type: 'TRAFFIC_LIGHT_CHANGED', payload: 0});
store.dispatch({ type: 'TRAFFIC_LIGHT_CHANGED', payload: 0});

store.dispatch({ type: 'TRAFFIC_LIGHT_CHANGED', payload: 1});
store.dispatch({ type: 'TRAFFIC_LIGHT_CHANGED', payload: 1});
store.dispatch({ type: 'TRAFFIC_LIGHT_CHANGED', payload: 1});

store.dispatch({ type: 'TRAFFIC_LIGHT_CHANGED', payload: 2});
store.dispatch({ type: 'TRAFFIC_LIGHT_CHANGED', payload: 2});

store.dispatch({ type: 'TRAFFIC_LIGHT_CHANGED', payload: 3});

store.dispatch({ type: 'ALL_TRAFFIC_LIGHTS_CHANGED'});
store.dispatch({ type: 'ALL_TRAFFIC_LIGHTS_CHANGED'});
store.dispatch({ type: 'ALL_TRAFFIC_LIGHTS_CHANGED'});
store.dispatch({ type: 'ALL_TRAFFIC_LIGHTS_CHANGED'});

/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();*/
