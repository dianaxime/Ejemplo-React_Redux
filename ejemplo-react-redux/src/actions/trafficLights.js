//Action creators funciones que producen actions 

import * as types from '../types/trafficLights';

export const addTrafficLight = () => ({
	type: types.TRAFFIC_LIGHT_ADDED,
})

//Si la funcion arrow solo recibe un parametro no ponerlo en parentesis