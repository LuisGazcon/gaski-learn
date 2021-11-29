import React, { Fragment, useEffect } from 'react';
import type { FC } from 'react';
import { Box, Flex, Grid, Text } from '@chakra-ui/layout';
import {
	IconButton,
	Icon,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	Modal,
	ModalCloseButton,
	ModalBody,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDisclosure } from '@chakra-ui/hooks';

import { useActions, useSelectors } from '@core/common/hooks';

import { teamModule } from '@/modules/team/team.module';
import type { TeamActions } from '@/modules/team/team.actions';
import type { TeamSelectors } from '@/modules/team/team.selectors';

import Task from '@/components/molecules/task';
import TaskColumn from '@/components/molecules/task-column';
import TaskGrid from '@/components/molecules/task-grid';
import type { Task as TaskType } from '@/modules/team/team.types';

interface TasksProps {
	teamId: string;
}

const Tasks: FC<TasksProps> = ({ teamId }) => {
	const teamActions = useActions<TeamActions>(teamModule);
	const teamSelectors = useSelectors<TeamSelectors>(teamModule);
	const tasks = teamSelectors.selectTeamTasks(teamId);
	const { isOpen, onOpen, onClose } = useDisclosure();

	useEffect(() => {
		console.log(tasks);
	}, [tasks]);

	useEffect(() => {
		teamActions.onTasksSnapshot(teamId, 'toDo');
		teamActions.onTasksSnapshot(teamId, 'doing');
		teamActions.onTasksSnapshot(teamId, 'done');
	}, []);

	const computeTasks = (tasks: Array<TaskType> = []) => {
		return tasks.length ? (
			tasks.map((task) => {
				const handleOnTaskDelete = () => teamActions.deleteTask(teamId, task.id);
				const handleOnTaskHighlight = () =>
					teamActions.setTask(teamId, task.id, { highlighted: !task.highlighted });
				return (
					<Task
						key={task.id}
						name={task.name}
						highlighted={task.highlighted}
						onDelete={handleOnTaskDelete}
						onHighlight={handleOnTaskHighlight}
					>
						{task.description}
					</Task>
				);
			})
		) : (
			<Text>There's nothing here</Text>
		);
	};

	return (
		<Fragment>
			<Flex direction='column' w='full' h='full' flex='1' gridGap='4'>
				<Flex gridGap='2' p='4' bg='gray.700' rounded='lg' shadow='lg'>
					<IconButton
						aria-label='create task'
						size='sm'
						icon={<Icon as={FontAwesomeIcon} icon={faPlus} />}
						onClick={onOpen}
					/>
					<IconButton
						aria-label='clear tasks'
						size='sm'
						icon={<Icon as={FontAwesomeIcon} icon={faTrash} />}
					/>
				</Flex>
				<TaskGrid>
					<TaskColumn heading='To do'>{computeTasks(tasks?.toDo)}</TaskColumn>
					<TaskColumn heading='In progress'>{computeTasks(tasks?.doing)}</TaskColumn>
					<TaskColumn heading='Done'>{computeTasks(tasks?.done)}</TaskColumn>
				</TaskGrid>
			</Flex>
			<Modal onClose={onClose} isOpen={isOpen}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Create Task</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Text>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, dignissimos totam
							inventore in non id unde placeat tempora officiis debitis assumenda iusto ipsa modi
							sint expedita nesciunt nobis nemo fugit dolorem. Doloremque aspernatur placeat odio
							unde accusamus dolorum, labore nisi quis aut quia magnam qui consectetur assumenda,
							quo inventore vero impedit itaque excepturi, in vitae sapiente beatae alias
							voluptatem. Autem cum vitae natus hic voluptatum ipsam obcaecati mollitia illo in
							adipisci esse, delectus ullam corporis distinctio, minima quam ducimus magni soluta
							minus suscipit. Quo ex obcaecati quaerat dolores nostrum saepe, ipsam dolore quas
							magni sunt iure nihil magnam et expedita, quis quasi omnis. Obcaecati molestias iste,
							laudantium, alias quisquam ducimus mollitia quis ex temporibus molestiae debitis
							incidunt totam dignissimos ab enim natus iure voluptatibus sed delectus assumenda.
							Optio ipsam quod a, odio voluptatibus labore voluptatum, quae quidem sapiente sed quo
							quia assumenda necessitatibus nostrum, asperiores voluptates deleniti ex earum totam
							nemo ea? Ea voluptate veritatis molestiae ducimus necessitatibus totam earum omnis
							aliquid sit! Consequatur eligendi nulla facilis veritatis assumenda, explicabo odio.
							Fugit delectus debitis, illo nemo repudiandae voluptas mollitia corrupti.
							Consequuntur, aut sit debitis harum tempore, tempora hic voluptate similique
							voluptatem recusandae ipsa, consectetur dolore sapiente doloremque non voluptates vel.{' '}
						</Text>
					</ModalBody>
				</ModalContent>
			</Modal>
		</Fragment>
	);
};

export default Tasks;
