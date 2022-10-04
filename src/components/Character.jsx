import {
	Box,
	Heading,
	Img,
	Icon,
	Text,
	Link,
	chakra,
	shouldForwardProp,
} from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import React, { useState } from "react";
import { Link as ReactLink } from "react-router-dom";

const CharacterBox = chakra(motion.div, {
	shouldForwardProp: (prop) =>
		isValidMotionProp(prop) || shouldForwardProp(prop),
});

const characterVariant = {
	initial: { opacity: 0, y: 20 },
	animate: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.02 } }),
	exit: { opacity: 0, y: 20 },
};

const Character = ({ character, index }) => {
	return (
		<ReactLink
			onClick={() => {
				document.documentElement.scrollTo(0, 0);
			}}
			as={Link}
			to={`/character/${character.id}`}
			style={{ maxWidth: "400px", width: "100%", margin: "auto" }}
			sx={{ transition: "border 0.2s" }}
			rounded={8}
			border='2px'
			_hover={{ borderColor: "#007bff88" }}
			borderColor={"#88888833"}
			overflow='hidden'
			// height={"full"}
			display='flex'
			flexDir={"column"}
		>
			<CharacterBox
				custom={index}
				style={{ maxWidth: "400px", width: "100%", margin: "auto" }}
				sx={{ transition: "border 0.2s" }}
				rounded={8}
				border='2px'
				_hover={{ borderColor: "#007bff88" }}
				borderColor={"#88888833"}
				overflow='hidden'
				// height={"full"}
				display='flex'
				flexDir={"column"}
				variants={characterVariant}
				initial='initial'
				animate='animate'
				exit='exit'
			>
				<Img src={character.image} />
				<Box p={2}>
					<Heading
						size='md'
						fontWeight={"normal"}
						display='flex'
						alignItems={"center"}
						gap={2}
					>
						<Icon
							viewBox='0 0 100 100'
							w={4}
							h={4}
							fill={
								character.status == "Alive"
									? "green.400"
									: character.status == "Dead"
									? "red.500"
									: "blue.300"
							}
						>
							<circle
								cx='50'
								cy='50'
								r='40'
								// stroke="black"
								strokeWidth='3'
								// fill="red"
							/>
						</Icon>
						<div>{character.name}</div>
					</Heading>
					<Text opacity={0.7}>{character.location.name}</Text>
				</Box>
			</CharacterBox>
		</ReactLink>
	);
};

export default Character;
