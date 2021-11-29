import React from 'react';
import { Flex, Heading } from '@chakra-ui/layout';
import {
	Text,
	Image,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Skeleton,
	SkeletonCircle,
	Icon,
} from '@chakra-ui/react';
import type { FC } from 'react';

import { useActions, useSelectors } from '@core/common/hooks';
import { authModule } from '@/modules/auth/auth.module';
import type { AuthSelectors } from '@/modules/auth/auth.selectors';
import type { AuthActions } from '@/modules/auth/auth.actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faSignInAlt, faSignOutAlt, faUsers } from '@fortawesome/free-solid-svg-icons';

interface AppHeaderProps {}

const AppHeader: FC<AppHeaderProps> = ({}: AppHeaderProps) => {
	const authActions = useActions<AuthActions>(authModule);
	const authSelectors = useSelectors<AuthSelectors>(authModule);
	const user = authSelectors.selectUser();
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
			zIndex='10'
		>
			<Flex>
				<Heading fontSize='3xl'>TerraLearn</Heading>
			</Flex>
			<Menu>
				<MenuButton>
					<Flex alignItems='center' gridGap='4'>
						<Skeleton isLoaded={user.displayName}>
							<Text fontSize='medium' fontWeight='bold'>
								{user.displayName}
							</Text>
						</Skeleton>
						<SkeletonCircle h='10' w='10' isLoaded={user.photoURL}>
							<Image h='10' w='10' rounded='full' src={user.photoURL} />
						</SkeletonCircle>
					</Flex>
				</MenuButton>
				<MenuList>
					<MenuItem icon={<Icon as={FontAwesomeIcon} icon={faAt} />}>
						<Text>Account</Text>
					</MenuItem>
					<MenuItem icon={<Icon as={FontAwesomeIcon} icon={faSignInAlt} />}>
						<Text>Join a team</Text>
					</MenuItem>
					<MenuItem icon={<Icon as={FontAwesomeIcon} icon={faUsers} />}>
						<Text>Create a team</Text>
					</MenuItem>
					<MenuItem
						icon={<Icon as={FontAwesomeIcon} icon={faSignOutAlt} color='red.400' />}
						onClick={() => authActions.signOut()}
					>
						<Text color='red.400'>Log out</Text>
					</MenuItem>
				</MenuList>
			</Menu>
		</Flex>
	);
};

export default AppHeader;
