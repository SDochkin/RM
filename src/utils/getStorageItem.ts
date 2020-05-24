export const getStorageItem = (key: string): any => {
	let result = localStorage.getItem(key);
	if (typeof result === 'string') {
		result = JSON.parse(result);
	}
	return result; //TODO: rework
};
