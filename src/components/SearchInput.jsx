import { Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { chakra } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
	const navigate = useNavigate();
	const [text, setText] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`/characters/search/${text}`);
	};
	return (
		<chakra.form
			flex={1}
			onSubmit={handleSubmit}
		>
			<Input
				variant={'filled'}
				placeholder="Search..."
				value={text}
				onChange={(e) => {
					setText(e.target.value);
				}}
			/>
		</chakra.form>
	);
};

export default SearchInput;
