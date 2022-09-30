import { Box, Heading, Img, shouldForwardProp, chakra } from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';
import React from 'react';

const ChakraBox = chakra(motion.div, {
	/**
	 * Allow motion props and non-Chakra props to be forwarded.
	 */
	shouldForwardProp: (prop) =>
		isValidMotionProp(prop) || shouldForwardProp(prop),
});

const characterVariation = {
	initial: { y: -20, opacity: 0 },
	animate: { y: 0, opacity: 1 },
	exit: { y: -20, opacity: 0 },
};

const Character = ({ character }) => {
	return (
		<ChakraBox
			variants={characterVariation}
			height={'full'}
			display="flex"
			flexDir={'column'}
			maxW="300px"
			w="full"
			mx="auto"
		>
			<Img src={character.image} />
			<Heading size="md">{character.name}</Heading>
		</ChakraBox>
	);
};

export default Character;
