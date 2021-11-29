import React, { useState } from 'react';
import type { FC } from 'react';
import { Flex, ListItem, Text } from '@chakra-ui/layout';
import { Skeleton, SkeletonCircle } from '@chakra-ui/skeleton';
import { Image } from '@chakra-ui/image';

interface MembersItemProps {
	member: any;
}

const MembersItem: FC<MembersItemProps> = ({ member }) => {
	const [loaded, setLoaded] = useState(false);

	return (
		<ListItem>
			<Flex p='2' bg='gray.700' gridGap='2' rounded='base' borderWidth='1px' borderColor='gray.500'>
				<SkeletonCircle h='12' w='12'>
					<Image
						src='https://picsum.photos/200'
						h='12'
						w='1
						2'
						rounded='full'
						onLoad={() => setLoaded(true)}
					/>
				</SkeletonCircle>
				<Flex direction='column' justifyContent='center'>
					<Text fontWeight='bold'>Luis Gazcón</Text>
					<Text fontSize='small'>luiselgazcon@gmail.com</Text>
				</Flex>
			</Flex>
		</ListItem>
	);
};

export default MembersItem;
