export interface Task {
	id: string;
	name: string;
	description: string;
	status: TaskStatus;
	highlighted?: boolean;
}

export type TaskStatus = 'toDo' | 'doing' | 'done';

export interface TeamTasks {
	toDo: Array<Task>;
	doing: Array<Task>;
	done: Array<Task>;
}
