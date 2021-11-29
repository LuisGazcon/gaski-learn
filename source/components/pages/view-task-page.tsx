import React, { Fragment } from 'react';
import type { FC } from 'react';
import { useParams } from 'react-router-dom';

import ViewTask from '@/components/organisms/view-task';

interface ViewTaskPageProps {}

const ViewTaskPage: FC<ViewTaskPageProps> = ({}) => {
	const { teamId, taskId } = useParams<any>();

	return (
		<Fragment>
			{teamId}
			{taskId}
			<ViewTask />
		</Fragment>
	);
};

export default ViewTaskPage;
