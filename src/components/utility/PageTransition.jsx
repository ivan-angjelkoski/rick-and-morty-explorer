import { motion } from 'framer-motion';

const variants = {
	initial: { y: 20, opacity: 0 },
	animate: { y: 0, opacity: 1 },
	exit: { y: 20, opacity: 0 },
};

const PageTransition = ({ children }) => {
	return (
		<motion.div
			variants={variants}
			initial="initial"
			animate="animate"
			exit="exit"
		>
			{children}
		</motion.div>
	);
};

export default PageTransition;
