import { gql, useQuery } from '@apollo/client';

const SEARCH_CHARACTERS = gql`
	query searchCharacters($name: String, $page: Int) {
		characters(filter: { name: $name }, page: $page) {
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

const useSearchCharacter = (name, page) => {
	const { data, loading, error } = useQuery(SEARCH_CHARACTERS, {
		variables: { name: name ?? '', page },
	});
	return { data, loading, error };
};

export default useSearchCharacter;
