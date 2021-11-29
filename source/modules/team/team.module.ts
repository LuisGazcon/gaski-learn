import { lazy } from 'react';
import { moduleFactory } from '@core/factory/module';

import { TeamSelectors } from './team.selectors';
import { TeamService } from './team.service';
import { TeamActions } from './team.actions';
import { TeamReducer } from './team.reducer';

export const teamModule = moduleFactory({
	name: 'team',
	reducer: TeamReducer,
	actions: TeamActions,
	selectors: TeamSelectors,
	component: lazy(() => import('./team.component')),
	providers: [TeamService],
	exports: [TeamService],
});
