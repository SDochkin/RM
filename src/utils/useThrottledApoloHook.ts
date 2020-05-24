import { useCallback } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { useThrottle } from 'use-lodash-debounce-throttle';
import { DocumentNode } from 'graphql';

export const useThrottledApolloHook = (query: DocumentNode, value: string): Array<any> => {
	const [getData, { data }] = useLazyQuery(query, { variables: { value } });
	const charactersList = data ? data.characters.results : [];
	const throttledGetData = useCallback(
		useThrottle(() => getData(), 1000),
		[]
	);
	return [charactersList, throttledGetData];
};
