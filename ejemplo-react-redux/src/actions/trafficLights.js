//Action creators funciones que producen actions 

import * as types from '../types/trafficLights';

export const addTrafficLight = () => ({
	type: types.TRAFFIC_LIGHT_ADDED,
})

//Si la funcion arrow solo recibe un parametro no ponerlo en parentesis

export const changeTrafficLight = index => ({
  type: types.TRAFFIC_LIGHT_CHANGED,
  payload: index,
});

export const changeAllTrafficLights = () => ({
  type: types.ALL_TRAFFIC_LIGHTS_CHANGED,
});