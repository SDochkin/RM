import { useCallback } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { useThrottle } from 'use-lodash-debounce-throttle';

export const useThrottledApolloHook = (query: any, value: string): Array<any> => {
	const [getData, { data }] = useLazyQuery(query, { variables: { value } });
	const result = data ? data.characters.results : [];
	const throttledGetData = useCallback(
		useThrottle(() => getData(), 1000),
		[]
	);
	return [result, throttledGetData];
};
