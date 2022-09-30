import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './lib/theme';
import { BrowserRouter } from 'react-router-dom';

const apolloClient = new ApolloClient({
	uri: 'https://rickandmortyapi.com/graphql',
	cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ApolloProvider client={apolloClient}>
			<ChakraProvider
				resetCSS
				theme={theme}
			>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ChakraProvider>
		</ApolloProvider>
	</React.StrictMode>
);
