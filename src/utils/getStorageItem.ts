import { IInitialParty } from '../interfaces';

export const getStorageItem = (key: string): IInitialParty => {
	const localStorageItem = localStorage.getItem(key);
	if (typeof localStorageItem === 'string') {
		return JSON.parse(localStorageItem);
	}
	return { rick: undefined, morty: undefined };
};
