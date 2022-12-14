import { gql, useQuery } from '@apollo/client';

const GET_CHARACTERS = gql`
	query getCharacters($page: Int!) {
		characters(page: $page) {
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
			info {
				count
				pages
				next
				prev
			}
		}
	}
`;

const useCharacters = (page) => {
	const { data, loading, error } = useQuery(GET_CHARACTERS, {
		variables: { page },
	});
	return { data, loading, error };
};

export default useCharacters;
