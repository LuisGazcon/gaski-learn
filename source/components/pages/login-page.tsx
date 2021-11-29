import React, { Fragment, useEffect } from 'react';
import type { FC } from 'react';
import { Box, Flex } from '@chakra-ui/layout';

import Page from '@/components/atoms/page';
import LoginForm from '@/components/organisms/login-form';
import AuthHeader from '@/components/organisms/auth-header';
import Layout from '../organisms/layout';

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = ({}: LoginPageProps) => {
	useEffect(() => {}, []);

	return (
		<Layout>
			<Flex alignItems='center' justifyContent='center' w='full' p='4'>
				<LoginForm />
			</Flex>
		</Layout>
	);
};

export default LoginPage;
