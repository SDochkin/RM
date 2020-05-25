import React, { useState } from 'react';

import { useThrottledApolloHook, getStorageItem } from '../../utils';
import { query } from '../../api/query';
import { IInitialParty } from '../../interfaces';

import { StyledInput, ImageBlock } from '../../components';
import {
	StyledMainContainer,
	StyledImagesBlock,
	StyledPartyBlock,
	StyledPartyHeader,
	StyledCharactersContainer,
	StyledCharactersBlock,
	StyledCharacterName,
	StyledCharacterImage,
} from './styled';

export const Main: React.FC = () => {
	const initialParty: IInitialParty = getStorageItem('party');
	const [value, setValue] = useState('');
	const [partyCharacters, setPartyCharacters] = useState(initialParty);
	const [charactersList, throttledGetData] = useThrottledApolloHook(query, value);
	return (
		<StyledMainContainer>
			<StyledInput throttledGetData={throttledGetData} value={value} setValue={setValue} />
			<StyledPartyBlock>
				<StyledPartyHeader>Party</StyledPartyHeader>
				<StyledCharactersContainer>
					<StyledCharactersBlock>
						<StyledCharacterImage src={partyCharacters.rick} />
						<StyledCharacterName>Rick</StyledCharacterName>
					</StyledCharactersBlock>
					<StyledCharactersBlock>
						<StyledCharacterImage src={partyCharacters.morty} />
						<StyledCharacterName>Morty</StyledCharacterName>
					</StyledCharactersBlock>
				</StyledCharactersContainer>
			</StyledPartyBlock>
			<StyledImagesBlock>
				<ImageBlock data={charactersList} partyCharacters={partyCharacters} setPartyCharacters={setPartyCharacters} />
			</StyledImagesBlock>
		</StyledMainContainer>
	);
};
