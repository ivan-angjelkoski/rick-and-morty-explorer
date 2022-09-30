import { Box, Center, Heading, SimpleGrid, Spinner } from '@chakra-ui/react';
import React from 'react';
import Character from '../components/Character';
import useCharacters from '../hooks/useCharacters';
import { AnimatePresence, motion } from 'framer-motion';

const gridVariants = {
	initial: { y: -20, opacity: 0 },
	animate: {
		y: 0,
		opacity: 1,
		transition: { staggerChildren: 0.1, delayChildren: 0.2 },
	},
	exit: { y: -20, opacity: 0 },
};

const Home = () => {
	const { data, error, loading } = useCharacters();
	if (loading) {
		return (
			<Center>
				<Spinner
					size={'xl'}
					m={3}
				/>
			</Center>
		);
	}
	if (error) {
		return (
			<Heading
				textAlign={'center'}
				m={3}
			>
				Error Loading Data...
			</Heading>
		);
	}
	return (
		<Box py={3}>
			<AnimatePresence initial={true}>
				<SimpleGrid
					variants={gridVariants}
					initial="initial"
					animate="animate"
					exit="exit"
					as={motion.div}
					// placeItems={'center'}
					templateColumns={{ base: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }}
					gap={3}
				>
					{data.characters.results.map((character) => (
						<Character
							key={character.id}
							character={character}
						/>
					))}
				</SimpleGrid>
				{/* {Pagination} */}
			</AnimatePresence>
		</Box>
	);
};

export default Home;
