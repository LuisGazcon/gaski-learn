import React from 'react';
import type { FC } from 'react';
import { Flex } from '@chakra-ui/layout';

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
	return (
		<Flex as='footer' bg='gray.900' p='4'>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia architecto nostrum quam ad
			maxime consequuntur temporibus, veniam excepturi? Aliquid eaque reiciendis et incidunt
			accusantium qui ipsam aliquam excepturi neque ratione laborum non, assumenda illo odit. Esse
			fugiat veniam repellat sequi?
		</Flex>
	);
};

export default Footer;
