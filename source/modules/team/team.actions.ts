import { Actions } from '@core/common/classes';
import { Inject } from '@core/decorators/inject';

import { TeamActionTypes } from './team.actions-enum';
import type { Task, TaskStatus } from './team.types';
import type { TeamService } from './team.service';

export class TeamActions extends Actions {
	@Inject()
	private teamService: TeamService;

	public async getTeams(userId: string) {
		this.dispatch({ type: TeamActionTypes.GET_TEAMS });
		this.teamService
			.getUserTeams(userId)
			.then((teams) => {
				this.dispatch({
					type: TeamActionTypes.GET_TEAMS_SUCCESS,
					payload: { teams },
				});
			})
			.catch((error) => {
				this.dispatch({
					type: TeamActionTypes.GET_TEAMS_FAILURE,
					payload: { error },
				});
			});
	}

	public async getTasks(teamId: string) {
		this.dispatch({ type: TeamActionTypes.GET_TASKS });

		this.teamService
			.getTeamTasks(teamId)
			.then((tasks) => {
				this.dispatch({
					type: TeamActionTypes.GET_TASKS_SUCCESS,
					payload: { tasks, teamId },
				});
			})
			.catch((error) => {
				this.dispatch({
					type: TeamActionTypes.GET_TASKS_FAILURE,
					payload: { error },
				});
			});
	}

	public async deleteTask(teamId: string, taskId: string) {
		this.dispatch({
			type: TeamActionTypes.DELETE_TASK,
		});
		this.teamService
			.deleteTask(teamId, taskId)
			.then(() => {
				this.dispatch({
					type: TeamActionTypes.DELETE_TASK_SUCCESS,
					payload: {},
				});
			})
			.catch((error) => {
				this.dispatch({
					type: TeamActionTypes.DELETE_TASK_FAILURE,
					payload: { error },
				});
			});
	}

	public setTask(teamId: string, taskId: string, task: Omit<Partial<Task>, 'id'>) {
		this.dispatch({
			type: TeamActionTypes.SET_TASK,
			payload: { teamId, taskId, task },
		});
		this.teamService
			.setTask(teamId, taskId, task)
			.then(() => {
				this.dispatch({
					type: TeamActionTypes.SET_TASK_SUCCESS,
					payload: {},
				});
			})
			.catch((error) => {
				this.dispatch({
					type: TeamActionTypes.SET_TASK_FAILURE,
					payload: { error },
				});
			});
	}

	public onTasksSnapshot(teamId: string, status: TaskStatus) {
		return this.teamService.onTasksSnapshot(teamId, status, (tasks: Array<Task>) => {
			this.dispatch({
				type: TeamActionTypes.ON_TASKS_SNAPSHOT_SUCCESS,
				payload: { tasks, teamId, status },
			});
		});
	}
}
