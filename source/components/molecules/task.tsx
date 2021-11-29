import React, { MouseEventHandler } from 'react';
import type { FC } from 'react';

import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import {
	Checkbox,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	IconButton,
	Icon,
	Input,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faSteamSquare } from '@fortawesome/free-brands-svg-icons';
import {
	faArrowRight,
	faEllipsisV,
	faExclamationTriangle,
	faHamburger,
	faPen,
	faStar,
	faStarHalfAlt,
	faTrash,
} from '@fortawesome/free-solid-svg-icons';

interface TaskProps {
	name: string;
	completed?: boolean;
	highlighted?: boolean;
	createdAt?: number;
	onDelete?: MouseEventHandler;
	onHighlight?: MouseEventHandler;
}

const Task: FC<TaskProps> = ({ children, name, highlighted, onDelete, onHighlight }) => {
	return (
		<Flex
			h='24z'
			background='gray.600'
			rounded='base'
			border='1px'
			borderColor='gray.500'
			justifyContent='space-between'
			overflow='hidden'
			direction='column'
			flexShrink={0}
		>
			<Flex p='2' background='gray.600' alignItems='center'>
				<Heading fontSize='medium' mr='2'>
					{name}
				</Heading>
				{highlighted && <Icon boxSize='6' as={FontAwesomeIcon} icon={faStar} color='yellow.400' />}
				<Menu>
					<MenuButton
						ml='auto'
						as={IconButton}
						size='xs'
						icon={<Icon as={FontAwesomeIcon} icon={faEllipsisV} />}
					></MenuButton>
					<MenuList>
						<MenuItem icon={<Icon as={FontAwesomeIcon} icon={faPen} />}>
							<Text colorScheme='red'>Edit</Text>
						</MenuItem>
						<MenuItem
							onClick={onHighlight}
							icon={
								<Icon
									as={FontAwesomeIcon}
									icon={highlighted ? faStarHalfAlt : faStar}
									color={highlighted ? 'orange.400' : 'yellow.400'}
								/>
							}
						>
							<Text color='yellow.400'>{highlighted ? 'Unhighlight' : 'Highlight'} </Text>
						</MenuItem>
						<MenuItem icon={<Icon as={FontAwesomeIcon} icon={faArrowRight} />}>
							<Text>Move to next column</Text>
						</MenuItem>
						<MenuItem
							icon={<Icon as={FontAwesomeIcon} icon={faTrash} color='red.400' />}
							onClick={onDelete}
						>
							<Text color='red.400'>Delete</Text>
						</MenuItem>
					</MenuList>
				</Menu>
			</Flex>
			<Flex direction='column' p='2' background='gray.700'>
				<Text>{children}</Text>
			</Flex>
		</Flex>
	);
};

export default Task;
