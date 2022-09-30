import { gql, useQuery } from '@apollo/client';

const GET_CHARACTERS = gql`
	query {
		characters {
			results {
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
			}
		}
	}
`;

const useCharacters = () => {
	const { data, loading, error } = useQuery(GET_CHARACTERS);
	return { data, loading, error };
};

export default useCharacters;
