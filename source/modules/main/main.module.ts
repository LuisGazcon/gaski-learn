import { lazy } from 'react';
import { moduleFactory } from '@core/factory/module';

import { MainActions } from './main.actions';
import { MainReducer } from './main.reducer';
import { MainSelectors } from './main.selectors';
import { MainService } from './main.service';

import { authModule } from '@/modules/auth/auth.module';

export const mainModule = moduleFactory({
	name: 'main',
	imports: [authModule],
	selectors: MainSelectors,
	actions: MainActions,
	reducer: MainReducer,
	component: lazy(() => import('./main.component')),
	providers: [MainService],
});
