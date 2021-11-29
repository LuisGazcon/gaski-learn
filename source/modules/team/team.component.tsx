import React, { Fragment } from 'react';
import type { FC } from 'react';

import NestedRoute from '@/components/utils/nested-route';
import TeamPage from '@/components/pages/team-page';
import ViewTaskPage from '@/components/pages/view-task-page';

interface TeamProps {}

const Team: FC<TeamProps> = ({}) => {
	return (
		<Fragment>
			<NestedRoute path='/:teamId/:taskId/edit' />
			<NestedRoute path='/:teamId/:taskId/delete' />
			<NestedRoute path='/:teamId/:taskId/view' component={ViewTaskPage} />
			<NestedRoute path='/:teamId/create' />
			<NestedRoute path='/:teamId' component={TeamPage} />
			<NestedRoute path='/' exact>
				Teams index
			</NestedRoute>
		</Fragment>
	);
};

export default Team;
