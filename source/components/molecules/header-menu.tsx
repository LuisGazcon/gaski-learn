import React, { MouseEventHandler } from 'react';
import type { FC } from 'react';
import type { User } from 'firebase/auth';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { Flex, Text } from '@chakra-ui/layout';
import { Icon } from '@chakra-ui/icon';

import { faAt, faSignInAlt, faSignOutAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from '@/components/molecules/avatar';

interface HeaderMenuProps {
	user: User;
	onSignOut: MouseEventHandler;
}

const HeaderMenu: FC<HeaderMenuProps> = ({ user, onSignOut }) => {
	return (
		<Menu>
			<MenuButton>
				<Flex alignItems='center' gridGap='4'>
					<Avatar src={user.photoURL} h='10' w='10' rounded='full' flexShrink={0} />
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
					onClick={onSignOut}
				>
					<Text color='red.400'>Log out</Text>
				</MenuItem>
			</MenuList>
		</Menu>
	);
};

export default HeaderMenu;
