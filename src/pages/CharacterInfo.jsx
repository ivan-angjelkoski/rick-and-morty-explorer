import {
	Badge,
	Box,
	Button,
	Center,
	Heading,
	Img,
	List,
	ListItem,
	OrderedList,
	Spinner,
} from '@chakra-ui/react';
import { MotionConfig } from 'framer-motion';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useCharacter from '../hooks/useCharacter';
import { motion } from 'framer-motion';
import { ChevronLeftIcon } from '@chakra-ui/icons';

const CharacterInfo = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const back = () => {
		navigate(-1);
	};
	const { data, error, loading } = useCharacter(id);
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
		<Box my={3}>
			<Button
				onClick={back}
				colorScheme="blue"
				leftIcon={<ChevronLeftIcon />}
			>
				Back
			</Button>
			<motion.img
				src={data.character.image}
				style={{
					margin: 'auto',
					width: 'min(100%,500px)',
					borderRadius: '10px',
					boxShadow: '1px 3px 5px #00000044',
				}}
			/>
			<Box my={3}>
				<Heading>{data.character.name}</Heading>
				<Badge
					p={1}
					my={1}
					shadow="md"
					colorScheme={
						data.character.status == 'Alive'
							? 'green'
							: data.character.status == 'Dead'
							? 'red'
							: 'blue'
					}
				>
					Status: {data.character.status}
				</Badge>
				<Heading
					size="sm"
					fontWeight={'medium'}
					mt={2}
				>
					Species: <b>{data.character.species}</b>
				</Heading>
				<Heading
					size="sm"
					fontWeight={'medium'}
					mt={2}
				>
					Gender: <b>{data.character.gender}</b>
				</Heading>
				<Heading
					size="sm"
					fontWeight={'medium'}
					mt={2}
				>
					Current Location: <b>{data.character.location.name}</b>
				</Heading>
				<Heading my={3}>Episodes:</Heading>
				<OrderedList
					listStylePosition={'inside'}
					ml={0}
				>
					{data.character.episode.map((episode) => (
						<ListItem key={episode.id}>{episode.name}</ListItem>
					))}
				</OrderedList>
			</Box>
		</Box>
	);
};

export default CharacterInfo;
