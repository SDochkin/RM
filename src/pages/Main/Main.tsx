import React, { useState } from 'react';

import { useThrottledApolloHook } from '../../utils/useThrottledApoloHook';
import { query } from '../../api/query';
import { getStorageItem } from '../../utils/getStorageItem';

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
	const initialParty = getStorageItem('party');
	const [value, setValue] = useState('');
	const [partyCharacters, setPartyCharacters] = useState(initialParty);
	const [charactersList, throttledGetData] = useThrottledApolloHook(query, value);
	return (
		<StyledMainContainer>
			<StyledInput throttledGetData={throttledGetData} value={value} setValue={setValue} />
			<StyledImagesBlock>
				<ImageBlock data={charactersList} partyCharacters={partyCharacters} setPartyCharacters={setPartyCharacters} />
			</StyledImagesBlock>
			<StyledPartyBlock>
				<StyledPartyHeader>Party</StyledPartyHeader>
				<StyledCharactersContainer>
					<StyledCharactersBlock image={partyCharacters && partyCharacters.rick}>
						{/* <StyledCharacterImage src={partyCharacters && partyCharacters.rick} /> */}
						<StyledCharacterName>Rick</StyledCharacterName>
					</StyledCharactersBlock>
					<StyledCharactersBlock image={partyCharacters && partyCharacters.morty}>
						{/* <StyledCharacterImage src={partyCharacters && partyCharacters.morty} /> */}
						<StyledCharacterName>Morty</StyledCharacterName>
					</StyledCharactersBlock>
				</StyledCharactersContainer>
			</StyledPartyBlock>
		</StyledMainContainer>
	);
};
