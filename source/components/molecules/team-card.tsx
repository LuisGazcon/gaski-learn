import React, { ReactNode } from 'react';
import type { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { Box, Flex, Heading, Divider, Link } from '@chakra-ui/layout';
import { Tag } from '@chakra-ui/tag';

interface TeamCardProps {
	children: ReactNode;
	id: string;
	heading: ReactNode;
	tags: Array<string>;
}

const TeamCard: FC<TeamCardProps> = ({ children, id, heading, tags = [] }) => {
	const history = useHistory();

	const handleOnClick = () => history.push(`/team/${id}`);
	const computeTags = () => tags.map((tag, index) => <Tag key={index}>{tag}</Tag>);

	return (
		<Box background='gray.700' p='4' rounded='lg' shadow='lg'>
			<Flex direction='column' gridGap='4'>
				<Link onClick={handleOnClick}>
					<Heading fontSize='xl'>{heading}</Heading>
				</Link>
				<Divider />
				<Box>{children}</Box>
				<Flex gridGap='4' paddingTop='auto' flexWrap='wrap'>
					{computeTags()}
				</Flex>
			</Flex>
		</Box>
	);
};

export default TeamCard;
