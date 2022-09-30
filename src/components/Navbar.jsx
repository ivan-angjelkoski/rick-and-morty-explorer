import { Box, Container, HStack, Img, Input } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';
import SearchInput from './SearchInput';
import DarkModeSwitch from './DarkModeSwitch';

const Navbar = () => {
	return (
		<Box
			as="nav"
			shadow="sm"
		>
			<Container maxW="5xl">
				<HStack
					justifyContent={'space-between'}
					flexDir={{ base: 'column', md: 'row' }}
					gap={3}
					padding={3}
				>
					<Link
						as={ReactLink}
						to={'/'}
					>
						<Img
							src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
							w={200}
						/>
					</Link>
					<HStack
						alignSelf={'stretch'}
						flex={1}
					>
						<SearchInput />
						<DarkModeSwitch />
					</HStack>
				</HStack>
			</Container>
		</Box>
	);
};

export default Navbar;
