import React, { useState } from 'react';
import type { FC } from 'react';
import { SkeletonCircle } from '@chakra-ui/skeleton';
import { Image } from '@chakra-ui/react';
import type { ImageProps } from '@chakra-ui/react';

interface AvatarProps {
	src: string;
}

const Avatar: FC<AvatarProps & ImageProps> = ({ src, ...props }) => {
	const [loading, setLoading] = useState(true);

	return (
		<SkeletonCircle isLoaded={!loading} {...props}>
			<Image src={src} {...props} onLoad={() => setLoading(false)} />
		</SkeletonCircle>
	);
};

export default Avatar;
