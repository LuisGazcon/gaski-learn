import { MainActionTypes } from './main.actions-enum';

const INITIAL_STATE = {};

export function MainReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case MainActionTypes.SET_FIRST_LOCATION: {
			const { location } = action.payload;
			return {
				...state,
				firstLocation: location,
			};
		}

		default:
			return state;
	}
}
