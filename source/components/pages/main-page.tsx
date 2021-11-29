import React, { Fragment } from 'react';
import type { FC } from 'react';
import { Flex, Grid } from '@chakra-ui/layout';

import Page from '@/components/atoms/page';
import Home from '@/components/organisms/home';
import AppHeader from '@/components/organisms/app-header';
import Aside from '@/components/organisms/aside';
import Navbar from '../organisms/navbar';
import Layout from '../organisms/layout';
interface MainPageProps {}

const MainPage: FC<MainPageProps> = ({}: MainPageProps) => {
	return (
		<Layout>
			<Page>
				<Home />
			</Page>
		</Layout>
	);
};

export default MainPage;
