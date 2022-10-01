import {
	Box,
	Heading,
	Img,
	shouldForwardProp,
	chakra,
	Icon,
	Text,
} from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';

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
	const [isEntered, setIsEntered] = useState(false);
	return (
		<ReactLink
			onMouseEnter={() => {
				setIsEntered(true);
			}}
			onMouseLeave={() => {
				setIsEntered(false);
			}}
			to={`/character/${character.id}`}
			style={{ maxWidth: '300px', width: '100%', margin: 'auto' }}
		>
			<ChakraBox
				sx={{ transition: 'border 0.2s' }}
				rounded={8}
				border="2px"
				_hover={{ borderColor: '#007bff88' }}
				borderColor={'#88888833'}
				overflow="hidden"
				variants={characterVariation}
				height={'full'}
				display="flex"
				flexDir={'column'}
				// maxW="300px"
				// w="full"
				// mx="auto"
			>
				<Img src={character.image} />
				<Box p={2}>
					<Heading
						size="md"
						fontWeight={'normal'}
						display="flex"
						alignItems={'center'}
						gap={2}
					>
						<Icon
							viewBox="0 0 100 100"
							w={4}
							h={4}
							fill={
								character.status == 'Alive'
									? 'green.400'
									: character.status == 'Dead'
									? 'red.500'
									: 'blue.300'
							}
						>
							<circle
								cx="50"
								cy="50"
								r="40"
								// stroke="black"
								strokeWidth="3"
								// fill="red"
							/>
						</Icon>
						<motion.div
							animate={{
								x: isEntered ? 10 : 0,
								rotate: isEntered ? [0, 2, -2, 0] : 0,
							}}
						>
							{character.name}
						</motion.div>
					</Heading>
					<Text opacity={0.7}>{character.location.name}</Text>
				</Box>
			</ChakraBox>
		</ReactLink>
	);
};

export default Character;
