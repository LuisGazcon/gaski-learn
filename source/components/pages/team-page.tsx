import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from '@chakra-ui/layout';
import type { FC } from 'react';

import AppHeader from '@/components/organisms/app-header';
import Page from '@/components/atoms/page';
import Aside from '@/components/organisms/aside';
import Team from '@/components/organisms/team';

import { teamModule } from '@/modules/team/team.module';
import { TeamSelectors } from '@/modules/team/team.selectors';
import { useActions, useSelectors } from '@core/common/hooks';
import { TeamActions } from '@/modules/team/team.actions';
import Navbar from '../organisms/navbar';
import Layout from '../organisms/layout';

interface TeamPageProps {}

const TeamPage: FC<TeamPageProps> = ({}) => {
	const { teamId } = useParams<any>();
	const teamSelectors = useSelectors<TeamSelectors>(teamModule);
	const teamActions = useActions<TeamActions>(teamModule);

	const team = teamSelectors.selectTeam(teamId);

	return (
		<Layout>
			<Page>
				<Team name={team?.name} description={team?.description} teamId={teamId} />
			</Page>
		</Layout>
	);
};

export default TeamPage;
