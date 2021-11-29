import React from 'react';
import type { FC } from 'react';
import { Box, Flex, Grid, Heading, HStack } from '@chakra-ui/layout';
import { Text, Image, Tag, Skeleton } from '@chakra-ui/react';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/tabs';

import Tasks from '@/components/organisms/tasks';
import Chat from '@/components/organisms/chat';
import Members from './members';

interface TeamProps {
	teamId: string;
	name: string;
	description: string;
}

const Team: FC<TeamProps> = ({ name, description, teamId }: TeamProps) => {
	return (
		<Flex p='4' flex='0' direction='column' h='full'>
			<Heading fontSize='2xl' mb='4'>
				{name}
			</Heading>
			<Tabs variant='soft-rounded' flex='1' h='full' display='flex' flexDirection='column'>
				<TabList mb='4'>
					<Tab>Tasks</Tab>
					<Tab>Chat</Tab>
				</TabList>
				<TabPanels display='flex' flexDirection='column' boxSizing='border-box'>
					<TabPanel p='0' display='flex' flexDirection='column'>
						<Tasks teamId={teamId} />
					</TabPanel>
					<TabPanel p='0'>
						<Members teamId={teamId} />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Flex>
	);
};

export default Team;
