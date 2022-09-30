import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
	global: (prop) => ({
		body: {
			bg: mode('gray.300', 'gray.800')(prop),
			color: mode('gray.800', 'gray.100')(prop),
		},
	}),
};
const config = {
	initialColorMode: 'dark',
	useSystemColorMode: false,
	disableTransitionOnChange: false,
};

const theme = extendTheme({
	styles,
	config,
});

export default theme;
