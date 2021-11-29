import React from 'react';
import type { FC, ReactNode } from 'react';

import { Flex, Heading } from '@chakra-ui/layout';
import type { FlexProps } from '@chakra-ui/layout';

interface TaskColumnProps {
	children?: ReactNode;
	heading?: ReactNode;
}

const TaskColumn: FC<TaskColumnProps & FlexProps> = ({ children, heading, ...props }) => {
	return (
		<Flex
			direction='column'
			gridGap='4'
			w='100%'
			flex={1}
			{...props}
			style={{ scrollSnapAlign: 'center' }}
		>
			<Heading fontSize='xl'>{heading}</Heading>
			<Flex direction='column' gridGap='4' p='4' bg='gray.700' rounded='lg' shadow='lg'>
				{children}
			</Flex>
		</Flex>
	);
};

export default TaskColumn;
