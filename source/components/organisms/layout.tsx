import React, { Fragment } from 'react';
import type { FC, ReactNode } from 'react';
import AppHeader from './app-header';
import { Flex, Grid } from '@chakra-ui/layout';
import Navbar from './navbar';
import Header from './header';
import Footer from './footer';

interface LayoutProps {
	children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<Fragment>
			<Header />
			<Flex direction='column' minH='100vh' w='full'>
				<Flex flexGrow={1} w='full' minH='100vh' h='full' px={['0', '4', '32']}>
					{children}
				</Flex>
			</Flex>
			<Footer />
		</Fragment>
	);
};

export default Layout;
