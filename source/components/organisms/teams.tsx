import React, { useEffect } from 'react';
import type { FC } from 'react';
import { Flex, Grid, Heading } from '@chakra-ui/layout';

import { useActions, useSelectors } from '@core/common/hooks';

import { authModule } from '@/modules/auth/auth.module';
import { AuthSelectors } from '@/modules/auth/auth.selectors';
import { teamModule } from '@/modules/team/team.module';
import { TeamActions } from '@/modules/team/team.actions';
import { TeamSelectors } from '@/modules/team/team.selectors';

import TeamCard from '@/components/molecules/team-card';

interface TeamsProps {}

const Teams: FC<TeamsProps> = ({}: TeamsProps) => {
	const teamActions = useActions<TeamActions>(teamModule);
	const teamSelectors = useSelectors<TeamSelectors>(teamModule);
	const authSelectors = useSelectors<AuthSelectors>(authModule);

	const user = authSelectors.selectUser();
	const teams = teamSelectors.selectTeams();

	useEffect(() => {
		teamActions.getTeams(user.uid);
	}, []);

	useEffect(() => {
		console.log(teams);
	}, [teams]);
	const computeTeams = () =>
		(teams || []).map((team) => (
			<TeamCard key={team.id} heading={team.name} tags={team.tags} id={team.id}>
				{team.description}
			</TeamCard>
		));

	return (
		<Flex direction='column'>
			<Heading fontSize='2xl' marginBottom='4'>
				Teams
			</Heading>
			<Grid templateColumns={['100%', '100%', 'repeat(3, minmax(0,1fr))']} gap='4'>
				{computeTeams()}
			</Grid>
		</Flex>
	);
};

export default Teams;
