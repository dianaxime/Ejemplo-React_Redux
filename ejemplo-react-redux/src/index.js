
import omit from 'lodash/omit';

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
}

*/



import {createStore, combineReducers} from 'redux';

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
		case 'REVERSED':{
			return state.slice().reverse();
		}
		//TOTALMENTE NECESARIO AGREGAR EL DEFAULT
		default:{
			return state;
		}
	}
};


/*const pmt = (state = [], action) => {
	switch(action.type) {
		case 'PMT_AGENT_ADDED':{
			return [...state, action.payload];
		}
		case 'PMT_AGENT_CHANGED' : {
			return state.map(
				pmtAgent => {
					if (pmtAgent.id === action.payload.id){
						return{
							...pmtAgent,
							...action.payload,
						};
					}
					return pmtAgent;
				}
			);
		}
		case 'REVERSED':{
			return state.slice().reverse();
		}
		default: {
			return state;
		}
	}
}*/


//Instalar moment JS


const order = (state = [], action) =>{
	switch(action.type){
		case 'PMT_AGENT_ADDED':{
			return [...state, action.payload.id]
		}
		case 'REVERSED':{
			return state.slice().reverse();
		}
		default:{
			return state
		}
	}
}

const byId = (state = {}, action) => {
	switch (action.type) {
		case 'PMT_AGENT_ADDED': {
			return{
				...state,
				[action.payload.id] : action.payload,
			};
		}
		case 'PMT_AGENT_CHANGED':{
			return {
				...state,
				[action.payload.id]:{
					...state[action.payload.id],
					...action.payload,
				},
			};
		}
		default: {
			return state;
		}
	}
}

const pmtToTrafficLights = (state = {}, action) =>{
	switch(action.type){
		case 'TRAFFIC_lIGHT_PMT_AGENT_ASSIGNED':{
			return {
				...state, 
				[action.payload.pmt]: action.payload.trafficLight
			}
		}
		case 'TRAFFIC_lIGHT_PMT_AGENT_UNASSIGNED':{
			return omit(state, action.payload.pmt)
		}
		default: {
			return state;
		}
	}
}
const pmt = combineReducers({
	byId,
	order
});

//yarn add lodash
const reducer = combineReducers({
	trafficLights,
	pmt, 
	pmtToTrafficLights
});

/*eghead
Ver videos
Building React Aplications with Idiomatic Redux
*/
const store = createStore(reducer);

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



/*const store = createStore(pmt);

store.subscribe(() => console.log(store.getState()));*/

store.dispatch({
	type: 'PMT_AGENT_ADDED',
	payload: {
		id: 1,
		name: 'Samuel',
		age: 30,
	}
});

store.dispatch({
	type: 'PMT_AGENT_ADDED',
	payload: {
		id: 2,
		name: 'Pepe Trueno',
		age: 3,
	}
});

store.dispatch({
	type: 'PMT_AGENT_ADDED',
	payload: {
		id: 3,
		name: 'Juanito Bazuca',
		age: 40,
	}
});

store.dispatch({
	type: 'PMT_AGENT_CHANGED',
	payload: {
		id: 2,
		name: 'Difunto Pepe Trueno',
	}
});

store.dispatch({type: 'REVERSED'});

store.dispatch({
	type: 'TRAFFIC_lIGHT_PMT_AGENT_ASSIGNED',
	payload: {
		pmt: 5,
		trafficLight: 2
	}
})

store.dispatch({
	type: 'TRAFFIC_lIGHT_PMT_AGENT_ASSIGNED',
	payload: {
		pmt: 6,
		trafficLight: 1
	}
})

store.dispatch({
	type: 'TRAFFIC_lIGHT_PMT_AGENT_ASSIGNED',
	payload: {
		pmt: 5,
		trafficLight: 3
	}
})

store.dispatch({
	type: 'TRAFFIC_lIGHT_PMT_AGENT_UNASSIGNED',
	payload: {
		pmt: 5
	}
})


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
