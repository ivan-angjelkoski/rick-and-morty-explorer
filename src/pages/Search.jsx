import {
	Box,
	Button,
	Center,
	Heading,
	HStack,
	SimpleGrid,
	Spinner,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Character from '../components/Character';
import { AnimatePresence, motion } from 'framer-motion';
import useSearchCharacter from '../hooks/useSeachCharacter';
import { useParams } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const gridVariants = {
	initial: { y: -20, opacity: 0 },
	animate: {
		y: 0,
		opacity: 1,
		transition: { staggerChildren: 0.1, delayChildren: 0.2 },
	},
	exit: { y: -20, opacity: 0 },
};

const Search = () => {
	const [page, setPage] = useState(1);
	const { name: charName } = useParams();
	const { data, error, loading } = useSearchCharacter(charName, page);
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
			<HStack my={3}>
				<Button
					colorScheme={'blue'}
					onClick={() => {
						setPage((p) => p - 1);
					}}
					disabled={page == 1}
					leftIcon={<ChevronLeftIcon />}
				>
					Prev
				</Button>
				<Button
					colorScheme={'blue'}
					onClick={() => {
						setPage((p) => p + 1);
					}}
					disabled={!data.characters.info.next}
					rightIcon={<ChevronRightIcon />}
				>
					Next
				</Button>
			</HStack>
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

export default Search;
