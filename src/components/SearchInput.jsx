import { Button, IconButton, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { chakra } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Search from '../pages/Search';
import { SearchIcon } from '@chakra-ui/icons';

const SearchInput = () => {
	const navigate = useNavigate();
	const [text, setText] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		if (text == '') {
			navigate(`/`);
		} else {
			navigate(`/character/search/${text}`);
		}
	};
	return (
		<chakra.form
			display={'flex'}
			flex={1}
			onSubmit={handleSubmit}
			gap={1}
		>
			<Input
				variant={'filled'}
				placeholder="Search..."
				value={text}
				onChange={(e) => {
					setText(e.target.value);
				}}
			/>
			<IconButton
				icon={<SearchIcon />}
				type="submit"
				colorScheme={'blue'}
			/>
		</chakra.form>
	);
};

export default SearchInput;
