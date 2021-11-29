import React from 'react';
import type { FC } from 'react';
import * as ReactRouter from 'react-router-dom';
import { Flex, Heading, Link } from '@chakra-ui/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Icon from '@chakra-ui/icon';

interface AuthHeaderProps {}

const AuthHeader: FC<AuthHeaderProps> = ({}) => {
	return (
		<Flex
			position='fixed'
			alignItems='center'
			justifyContent='space-between'
			flexDirection='row'
			h='16'
			w='full'
			px='4'
			background='gray.700'
			borderBottom='1px'
			borderBottomColor='gray.500'
			zIndex='10'
		>
			<Flex>
				<Heading fontSize='3xl'>TerraLearn</Heading>
			</Flex>
			<Flex gridGap='4'>
				<Link to='/about' as={ReactRouter.Link}>
					About
				</Link>
				<Link to='/privacy' as={ReactRouter.Link}>
					Privacy
				</Link>
				<Link
					href='https://www.github.com/LuisGazcon/terra-learn'
					as={'a'}
					target='_blank'
					rel='noopener noreferrer'
				>
					<Icon as={FontAwesomeIcon} icon={faGithub} marginRight='2' />
					Project
				</Link>
			</Flex>
		</Flex>
	);
};

export default AuthHeader;
