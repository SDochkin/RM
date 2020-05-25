export const setStorageItem = (key: string, item: { rick: string; morty: string }): void => {
	localStorage.setItem(key, JSON.stringify(item));
};
