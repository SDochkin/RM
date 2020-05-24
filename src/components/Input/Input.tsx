import React from 'react';
import styled from 'styled-components';

const isValidLength = (str: string): boolean => str.length > 2;

interface IInput {
	throttledGetData: () => void;
	value: string;
	setValue: (e: string) => void;
	className?: string;
}

const Input: React.FC<IInput> = ({ throttledGetData, value, setValue, className }: IInput) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setValue(e.target.value);
		if (isValidLength(value)) {
			throttledGetData();
		}
	};
	return <input className={className} value={value} onChange={handleChange}></input>;
};

export const StyledInput = styled(Input)`
	width: 810px;
	height: 80px;
	border: 1px solid #a0a0a0;
	padding: 10px 15px;
	font-family: Roboto;
	font-weight: 300;
	font-size: 30px;
	line-height: 35px;
	margin-bottom: 30px;
	flex: 0 0 auto;
`;
