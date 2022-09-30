import { Box, Center, Heading, Spinner } from '@chakra-ui/react';
import React from 'react';
import useCharacters from '../hooks/useCharacters';

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
	return <Box></Box>;
};

export default Home;
