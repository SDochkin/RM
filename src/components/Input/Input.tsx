import React from 'react';

import './styles.css';

const isValidLength = (str: string): boolean => str.length > 2;

interface IInput {
	throttledGetData: () => void;
	value: string;
	setValue: (e: string) => void;
}

export const Input: React.FC<IInput> = ({ throttledGetData, value, setValue }: IInput) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setValue(e.target.value);
		if (isValidLength(value)) {
			throttledGetData();
		}
	};
	return <input className="input" value={value} onChange={handleChange}></input>;
};
