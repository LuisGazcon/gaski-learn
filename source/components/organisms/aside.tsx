import React from 'react';
import type { FC } from 'react';
import { Box, Flex, Grid, Heading } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Link } from 'react-router-dom';

interface AsideProps {}

const Aside: FC<AsideProps> = ({}: AsideProps) => {
	return (
		<Flex p='4' direction='column'>
			<Heading fontSize='2xl' mb='4'>
				Menu
			</Heading>
			<Grid
				autoFlow='row'
				background='gray.700'
				rounded='lg'
				p='4'
				gap='2'
				position='sticky'
				top='20'
				left='20'
				shadow='lg'
				borderWidth='1px'
				borderColor='whiteAlpha.300'
			>
				<Heading fontSize='xl'>Shortcuts</Heading>
				<Button justifyContent='flex-start' as={Link} to='/'>
					Home
				</Button>
				<Button justifyContent='flex-start'>Teams</Button>
				<Button justifyContent='flex-start'>Messages</Button>
				<Button justifyContent='flex-start'>Settings</Button>
			</Grid>
		</Flex>
	);
};

export default Aside;
