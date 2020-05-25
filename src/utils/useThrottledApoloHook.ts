import { useCallback } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { useThrottle } from 'use-lodash-debounce-throttle';
import { DocumentNode } from 'graphql';

import { isValidLength } from './isValidLength';

export const useThrottledApolloHook = (query: DocumentNode, value: string): Array<any> => {
	const [getData, { data }] = useLazyQuery(query, { variables: { value } });
	let charactersList = [];
	if (isValidLength(value)) {
		charactersList = data && data.characters.results;
	}
	const throttledGetData = useCallback(
		useThrottle(() => getData(), 300),
		[]
	);
	return [charactersList, throttledGetData];
};
