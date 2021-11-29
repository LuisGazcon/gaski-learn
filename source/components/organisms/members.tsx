import React, { useEffect } from 'react';
import type { FC } from 'react';
import { Flex, List } from '@chakra-ui/layout';

import { useSelectors, useActions } from '@core/common/hooks';

import { teamModule } from '@/modules/team/team.module';
import { TeamSelectors } from '@/modules/team/team.selectors';
import { TeamActions } from '@/modules/team/team.actions';

import MembersItem from '@/components/molecules/members-item';

interface MemmbersProps {
	teamId: string;
}

const Members: FC<MemmbersProps> = ({ teamId }) => {
	const teamActions = useActions<TeamActions>(teamModule);
	const teamSelectors = useSelectors<TeamSelectors>(teamModule);
	const team = teamSelectors.selectTeam(teamId);

	useEffect(() => {}, []);

	useEffect(() => {
		console.log(team);
	}, [team]);

	return (
		<Flex>
			<List>
				{team?.members.map((member) => (
					<MembersItem key={member} member={{}}>
						{member}
					</MembersItem>
				))}
			</List>
		</Flex>
	);
};

export default Members;
