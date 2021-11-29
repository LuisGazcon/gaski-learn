import React from 'react';
import type { FC, ReactNode } from 'react';
import { Flex } from '@chakra-ui/layout';

interface PageProps {
	children?: ReactNode;
}

const Page: FC<PageProps> = ({ children }) => {
	return (
		<Flex as='main' flex={1} direction='column' width='full' paddingTop='16'>
			{children}
		</Flex>
	);
};

export default Page;
