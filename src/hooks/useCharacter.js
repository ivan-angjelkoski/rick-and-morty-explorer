import { gql, useQuery } from '@apollo/client';

const GET_CHARACTER = gql`
	query getCharacter($id: ID!) {
		character(id: $id) {
			name
			id
			status
			species
			gender
			location {
				name
				dimension
			}
			origin {
				name
				dimension
			}
			image
			episode {
				name
			}
		}
	}
`;

const useCharacter = (id) => {
	const { data, loading, error } = useQuery(GET_CHARACTER, {
		variables: { id },
	});
	return { data, loading, error };
};

export default useCharacter;
