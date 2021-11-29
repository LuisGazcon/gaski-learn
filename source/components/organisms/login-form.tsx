import React from 'react';
import type { FC } from 'react';
import { Flex, Heading, Button, Icon } from '@chakra-ui/react';
import { Divider, Text } from '@chakra-ui/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

import { useActions } from '@core/common/hooks';

import { authModule } from '@/modules/auth/auth.module';
import type { AuthActions } from '@/modules/auth/auth.actions';

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = ({}: LoginFormProps) => {
	const authActions = useActions<AuthActions>(authModule);

	return (
		<Flex w='xl' rounded='lg' overflow='hidden' shadow='lg' direction={['column', 'column', 'row']}>
			<Flex bg='gray.600' w='full' direction='column' p='4'>
				<Heading fontSize='2xl'>Welcome!</Heading>
				<Divider my='4' />
				<Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, similique!</Text>
			</Flex>
			<Flex bg='gray.700' w='full' direction='column' p='4'>
				<Heading fontSize='2xl'>Sign in</Heading>
				<Divider my='4' />
				<Flex direction='column' gridGap='4'>
					<Button
						justifyContent='flex-start'
						leftIcon={<Icon as={FontAwesomeIcon} icon={faFacebook} />}
						colorScheme='facebook'
						onClick={() => authActions.signIn('facebook')}
					>
						Facebook
					</Button>
					<Button
						justifyContent='flex-start'
						leftIcon={<Icon as={FontAwesomeIcon} icon={faGoogle} />}
						colorScheme='red'
						onClick={() => authActions.signIn('google')}
					>
						Google
					</Button>
					<Button
						justifyContent='flex-start'
						leftIcon={<Icon as={FontAwesomeIcon} icon={faGithub} />}
						colorScheme='purple'
						onClick={() => authActions.signIn('github')}
					>
						GitHub
					</Button>
				</Flex>
				<Divider my='4' />
				<Text fontSize='small' color='gray.500'>
					Read our privacy policy
				</Text>
			</Flex>
		</Flex>
	);
};

export default LoginForm;
/* <Flex
			p='4'
			flexDirection='column'
			width={{ lg: '96' }}
			background='gray.700'
			rounded='base'
			border='1px'
			borderColor='gray.600'
			boxSizing='border-box'
		>
			<Heading marginBottom='2'>Iniciar sesión</Heading>
			<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quae!</Text>
			<Divider my='4' />
			<Box>
				<Grid flexDirection='column' gridRowGap='4'>
					<Button colorScheme='facebook' onClick={() => authActions.signIn('facebook')}>
						Facebook
					</Button>
					<Button colorScheme='red' onClick={() => authActions.signIn('google')}>
						Google
					</Button>
					<Button colorScheme='purple' onClick={() => authActions.signIn('github')}>
						GitHub
					</Button>
				</Grid>
			</Box>
			<Divider my='4' />
			<Text fontSize='small' color='gray.500'>
				¿No tienes una cuenta?, <Link color='primary'>crea una aquí</Link>
			</Text>
		</Flex> */
