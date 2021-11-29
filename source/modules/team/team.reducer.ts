import { TeamActionTypes } from './team.actions-enum';

const INITIAL_STATE = {
	teams: [],
	tasks: {},
};

export function TeamReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case TeamActionTypes.GET_TEAMS_SUCCESS: {
			return {
				...state,
				teams: action.payload.teams,
			};
		}

		case TeamActionTypes.GET_TEAMS_FAILURE: {
			return {
				...state,
				error: action.payload.error,
			};
		}

		case TeamActionTypes.GET_TASKS_SUCCESS: {
			const { teamId, tasks } = action.payload;
			return {
				...state,
				tasks: {
					...state.tasks,
					[teamId]: tasks,
				},
			};
		}

		case TeamActionTypes.ON_TASKS_SNAPSHOT_SUCCESS: {
			const { teamId, tasks, status } = action.payload;
			return {
				...state,
				tasks: {
					...state.tasks,
					[teamId]: {
						...state.tasks[teamId],
						[status]: tasks || [],
					},
				},
			};
		}

		default:
			return state;
	}
}
