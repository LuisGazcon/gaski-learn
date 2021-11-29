import React from 'react';
import type { FC, ReactNode } from 'react';
import { Grid } from '@chakra-ui/layout';

interface TaskGridProps {
	children?: ReactNode;
}

const TaskGrid: FC<TaskGridProps> = ({ children }) => {
	return (
		<Grid
			overflowX={['scroll', 'unset', 'unset']}
			templateColumns={['100% 100% 100%', '100% 100% 100%', '1fr 1fr 1fr']}
			h='full'
			gridGap='4'
			style={{ scrollSnapType: 'x mandatory' }}
		>
			{children}
		</Grid>
	);
};

export default TaskGrid;
