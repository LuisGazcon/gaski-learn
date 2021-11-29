import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { FC } from 'react';

import { getSelectors } from '@core/common/getters';
import type { AppDefaultProps } from '@core/types/common';

import TeamPage from '@/components/pages/team-page';
import PrivateRoute from '@/components/utils/private-route';
import PublicRoute from '@/components/utils/public-route';

import { mainModule } from '@/modules/main/main.module';
import { MainActions } from '@/modules/main/main.actions';
import { authModule } from '@/modules/auth/auth.module';
import { AuthSelectors } from '@/modules/auth/auth.selectors';
import { useActions, useSelectors } from '@core/common/hooks';
import { AuthActions } from '@/modules/auth/auth.actions';
import { MainSelectors } from '@/modules/main/main.selectors';

interface AppProps {}

const App: FC<AppProps & AppDefaultProps> = ({ modules }) => {
	const { Main, Auth, Team } = modules;
	const mainActions = useActions<MainActions>(mainModule);
	const mainSelectors = useSelectors<MainSelectors>(mainModule);
	const authActions = useActions<AuthActions>(authModule);
	const authSelectors = useSelectors<AuthSelectors>(authModule);
	const auth = authSelectors.selectAuth();

	const firstLocation = mainSelectors.selectFirstLocation();

	useEffect(() => {
		console.log(firstLocation);
	}, [firstLocation]);

	useEffect(() => {
		mainActions.setFirstLocation(window.location);
	}, []);

	useEffect(() => {
		authActions.onAuthStateChanged((user) => user);
	}, []);

	return (
		<Suspense fallback='loading'>
			<BrowserRouter>
				<Switch>
					<PrivateRoute
						allowOn={auth?.user}
						path='/team'
						component={Team}
						fallback={<Redirect to='/login' />}
					/>
					<PrivateRoute
						allowOn={auth?.user}
						path='/'
						exact
						component={Main}
						fallback={<Redirect to='/login' />}
					/>
					<PublicRoute
						disallowOn={auth?.user}
						path='/'
						component={Auth}
						fallback={<Redirect to='/' />}
					/>
				</Switch>
			</BrowserRouter>
		</Suspense>
	);
};

export default App;
