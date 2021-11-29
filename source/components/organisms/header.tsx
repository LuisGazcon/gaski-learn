import React from 'react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@chakra-ui/icon';
import { IconButton } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { Flex, Heading, Text } from '@chakra-ui/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import { useActions, useSelectors } from '@core/common/hooks';

import Navbar from '@/components/organisms/navbar';
import NavbarLink from '@/components/molecules/navbar-link';
import HeaderMenu from '@/components/molecules/header-menu';

import { authModule } from '@/modules/auth/auth.module';
import { AuthActions } from '@/modules/auth/auth.actions';
import { AuthSelectors } from '@/modules/auth/auth.selectors';

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
	const { isOpen, onToggle } = useDisclosure();
	const authActions = useActions<AuthActions>(authModule);
	const authSelectors = useSelectors<AuthSelectors>(authModule);
	const user = authSelectors.selectUser();

	return (
		<Flex
			as='header'
			bg='gray.700'
			h='16'
			px='4'
			w='full'
			alignItems='center'
			direction={['row', 'row', 'row']}
			position='fixed'
			shadow='lg'
			/* 			justifyContent={['space-between', 'space-between', 'unset']} */
			zIndex='10'
		>
			<IconButton
				display={['flex', 'flex', 'none']}
				visibility={['visible', 'visible', 'hidden']}
				aria-label='toggle-navbar'
				icon={<Icon as={FontAwesomeIcon} icon={faEllipsisV} />}
				onClick={onToggle}
			/>

			<Heading
				fontSize='3xl'
				w='full'
				h='16'
				alignItems='center'
				justifyContent='center'
				display='flex'
				flex={[1, 1, 0]}
				mr={[0, 0, 'auto']}
			>
				<Link to='/'>GaskiLearn</Link>
			</Heading>

			<Navbar isOpen={isOpen}>
				<NavbarLink>Home</NavbarLink>
				<NavbarLink>Teams</NavbarLink>
				<NavbarLink>About</NavbarLink>
				<NavbarLink>Privacy</NavbarLink>
			</Navbar>
			{user && <HeaderMenu user={user} onSignOut={() => authActions.signOut()} />}
		</Flex>
	);
};

export default Header;
