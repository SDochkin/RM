import React, { useState } from 'react';
import gql from 'graphql-tag';

import { Input, ImageBlock } from '../../components';

import { useThrottledApolloHook } from '../../utils/useThrottledApoloHook';

import { IImageBlock } from '../../interfaces';
import './styles.css';

export const Main: React.FC = () => {
	const [value, setValue] = useState('');
	const query = gql`
		query getCharactersData($value: String!) {
			characters(filter: { name: $value }) {
				results {
					id
					image
					species
				}
			}
		}
	`;
	const [result, throttledGetData] = useThrottledApolloHook(query, value);
	return (
		<div className="main-container">
			<Input throttledGetData={throttledGetData} value={value} setValue={setValue} />
			<div className="main-container__images-block">
				{result.map(({ id, image, species }: IImageBlock): any => (
					<ImageBlock key={id} src={image} dataId={id} alt={`${species} Rick`} />
				))}
			</div>
		</div>
	);
};
