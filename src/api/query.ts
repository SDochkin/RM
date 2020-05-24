import gql from 'graphql-tag';

export const query = gql`
	query getCharactersData($value: String!) {
		characters(filter: { name: $value }) {
			results {
				id
				image
				name
			}
		}
	}
`;
