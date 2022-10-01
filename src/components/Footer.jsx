import { Box, Center, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
	return (
		<Center
			bg={useColorModeValue('gray.200', 'gray.800')}
			p={3}
		>
			<Box textShadow={'1px 1px 2px #00000033'}>
				<Text>Rick And Morty Exlorer - By Ivan Angjelkoski</Text>
				<Text opacity={0.6}>React - GraphQl - Chakra-Ui - Framer Motion</Text>
			</Box>
		</Center>
	);
};

export default Footer;
