import {
	Box,
	Button,
	Center,
	Heading,
	HStack,
	SimpleGrid,
	Spinner,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Character from "../components/Character";
import useCharacters from "../hooks/useCharacters";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const gridVariants = {
	initial: { y: -20, opacity: 0 },
	animate: {
		y: 0,
		opacity: 1,
		transition: { staggerChildren: 0, delayChildren: 0.2 },
	},
	exit: { y: -20, opacity: 0 },
};

const Home = () => {
	const [page, setPage] = useState(1);
	const { data, error, loading } = useCharacters(page);
	if (loading) {
		return (
			<Center>
				<Spinner
					size={"xl"}
					m={3}
				/>
			</Center>
		);
	}
	if (error) {
		return (
			<Heading
				textAlign={"center"}
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
					colorScheme={"blue"}
					onClick={() => {
						setPage((p) => p - 1);
					}}
					disabled={page == 1}
					leftIcon={<ChevronLeftIcon />}
				>
					Prev
				</Button>
				<Button
					colorScheme={"blue"}
					onClick={() => {
						setPage((p) => p + 1);
					}}
					disabled={!data.characters.info.next}
					rightIcon={<ChevronRightIcon />}
				>
					Next
				</Button>
			</HStack>
			<SimpleGrid
				templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }}
				gap={3}
			>
				{data.characters.results.map((character, i) => (
					<Character
						key={character.id}
						character={character}
						index={i}
					/>
				))}
			</SimpleGrid>
		</Box>
	);
};

export default Home;
