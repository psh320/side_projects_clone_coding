import {SIGN_IN, SIGN_OUT} from './types';
import fish from '../apis/acnh';
export const signIn = (userId) => {
	return {
		type: SIGN_IN,
		payload: userId
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT
	}
}

export const fetchFish = () => async dispatch => {
		const response = await fish.get('/fish');
		dispatch({type: 'FETCH_FISH', payload: response.data})
	};