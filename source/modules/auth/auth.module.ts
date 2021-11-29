import { lazy } from 'react';
import { moduleFactory } from '@core/factory/module';

import { AuthSelectors } from './auth.selectors';
import { AuthService } from './auth.service';
import { AuthActions } from './auth.actions';
import { AuthReducer } from './auth.reducer';

export const authModule = moduleFactory({
	name: 'auth',
	reducer: AuthReducer,
	actions: AuthActions,
	selectors: AuthSelectors,
	component: lazy(() => import('./auth.component')),
	providers: [AuthService],
	exports: [AuthService],
});
