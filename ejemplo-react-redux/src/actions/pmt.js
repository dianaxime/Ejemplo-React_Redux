import * as types from '../types/pmt';

export const addPMTAgent = (id, name, age) => ({
	type: types.PMT_AGENT_ADDED,
	payload: {id, name, age},
});

export const changePMTAgent = (id, atributes = {}) => ({
	type: types.PMT_AGENT_CHANGED,
	payload: {id, ...atributes},
})