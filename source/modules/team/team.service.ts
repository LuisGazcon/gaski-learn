import {
	getFirestore,
	collection,
	doc,
	query,
	where,
	getDocs,
	getDoc,
	deleteDoc,
	addDoc,
	onSnapshot,
	setDoc,
} from 'firebase/firestore';
import type { Firestore } from 'firebase/firestore';
import type { Unsubscribe } from '@firebase/util';

import { getDocDataFromResult, getDocsDataFromResult } from '@/global/utils/firebase';

import type { Task, TaskStatus, TeamTasks } from './team.types';

export class TeamService {
	private firestore: Firestore = getFirestore();

	public async getUserTeams(userId: string): Promise<any> {
		console.log(userId);
		const teamsQuery = query(
			collection(this.firestore, 'teams'),
			where('members', 'array-contains', userId),
		);
		const result = await getDocs(teamsQuery);
		const documents = getDocsDataFromResult(result);
		return documents;
	}

	public async getTeam(teamId: string): Promise<any> {
		const teamQuery = doc(this.firestore, 'teams', teamId);
		const result = await getDoc(teamQuery);
		const document = getDocDataFromResult(result);
		return document;
	}

	public async getTeamTasks(teamId: string): Promise<TeamTasks> {
		const toDoTasks = await this.getTeamTasksByStatus(teamId, 'toDo');
		const doingTasks = await this.getTeamTasksByStatus(teamId, 'doing');
		const doneTasks = await this.getTeamTasksByStatus(teamId, 'done');
		return {
			toDo: toDoTasks,
			doing: doingTasks,
			done: doneTasks,
		};
	}

	public async getTeamTasksByStatus(teamId: string, status: TaskStatus): Promise<Array<Task>> {
		const tasksQuery = query(
			collection(this.firestore, 'teams', teamId, 'tasks'),
			where('status', '==', status),
		);
		const result = await getDocs(tasksQuery);
		const documents = getDocsDataFromResult(result);
		return documents;
	}

	public async getTask(teamId: string, taskId: string): Promise<Task> {
		const taskQuery = doc(this.firestore, 'teams', teamId, 'tasks', taskId);
		const result = await getDoc(taskQuery);
		const document = getDocDataFromResult(result);
		return document;
	}

	public async createTask(teamId: string, taskBody: Omit<Task, 'id'>): Promise<void> {
		const addTaskQuery = await addDoc(
			collection(this.firestore, 'teams', teamId, 'tasks'),
			taskBody,
		);
		const result = await getDoc(addTaskQuery);
		return getDocDataFromResult(result);
	}

	public async deleteTask(teamId: string, taskId: string): Promise<void> {
		await deleteDoc(doc(this.firestore, 'teams', teamId, 'tasks', taskId));
	}

	public async setTask(
		teamId: string,
		taskId: string,
		task: Omit<Partial<Task>, 'id'>,
	): Promise<void> {
		return await setDoc(doc(this.firestore, 'teams', teamId, 'tasks', taskId), task, {
			merge: true,
		});
	}

	public onTasksSnapshot(
		teamId: string,
		status: TaskStatus,
		onTasksSnapshot: Function,
	): Unsubscribe {
		const tasksQuery = query(
			collection(this.firestore, 'teams', teamId, 'tasks'),
			where('status', '==', status),
		);
		console.log(onTasksSnapshot.name);

		const unsiscribe = onSnapshot(tasksQuery, (snapshot) => {
			const tasks = getDocsDataFromResult(snapshot);
			onTasksSnapshot(tasks);
		});
		return unsiscribe;
	}
}
