import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import CharacterInfo from './pages/CharacterInfo';
import Home from './pages/Home';
import PageTransition from './components/utility/PageTransition';
import { AnimatePresence } from 'framer-motion';
import Search from './pages/Search';
import { Container } from '@chakra-ui/react';
import Footer from './components/Footer';

function App() {
	const location = useLocation();
	return (
		<>
			<Navbar />
			<Container maxW="4xl">
				<AnimatePresence
					mode="wait"
					initial={false}
				>
					<Routes
						location={location}
						key={location.pathname}
					>
						<Route
							path="/"
							element={
								<PageTransition>
									<Home />
								</PageTransition>
							}
						/>
						<Route
							path="/character/:id"
							element={
								<PageTransition>
									<CharacterInfo />
								</PageTransition>
							}
						/>
						<Route
							path="/character/:id"
							element={
								<PageTransition>
									<CharacterInfo />
								</PageTransition>
							}
						/>
						<Route
							path="/character/search/:name"
							element={
								<PageTransition>
									<Search />
								</PageTransition>
							}
						/>
					</Routes>
				</AnimatePresence>
			</Container>
			<Footer />
		</>
	);
}

export default App;
