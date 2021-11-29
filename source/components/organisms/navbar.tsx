import React, { ReactNode } from 'react';
import type { FC } from 'react';
import { Flex } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Collapse, Tooltip } from '@chakra-ui/react';

interface NavbarProps {
	children?: ReactNode;
	isOpen?: boolean;
}

const Navbar: FC<NavbarProps> = ({ children, isOpen }) => {
	return (
		<Collapse in={isOpen} animateOpacity>
			<Flex
				as='nav'
				direction={['column', 'column', 'row']}
				position={['absolute', 'absolute', 'unset']}
				top='16'
				left='0'
				right='0'
				bg='gray.700'
				p='4'
			>
				{children}
			</Flex>
		</Collapse>
	);
};

export default Navbar;
