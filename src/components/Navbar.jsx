import { Box, Container, HStack, Img, Input } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';
import SearchInput from './SearchInput';
import DarkModeSwitch from './DarkModeSwitch';
import { motion } from 'framer-motion';

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
						<motion.div
							whileHover={{
								rotate: ['0deg', '10deg', '-10deg', '0deg'],
							}}
							transition={{ duration: 0.3 }}
						>
							<Img
								transition={'all 0.1s'}
								filter={'drop-shadow: drop-shadow(1px 1px 1px #00000000)'}
								_hover={{ filter: 'drop-shadow(1px 1px 1px #00000033)' }}
								src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
								w={200}
							/>
						</motion.div>
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
