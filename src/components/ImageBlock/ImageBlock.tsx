import React, { useState, useEffect } from 'react';
import differenceBy from 'lodash/differenceBy';

import { setStorageItem } from '../../utils';

import { ICharacter } from '../../interfaces';

import { StyledImageBlockContainer, StyledImage, StyledImageClicked, StyledCloseIcon } from './styled';

export const ImageBlock: React.FC<any> = ({ data, partyCharacters, setPartyCharacters }): any => {
	const [filteredData, setFilteredData] = useState([]);
	const [deletedCharactersList, setDeletedCharactersList] = useState([]);
	const [clicked, setClicked] = useState({ rick: '', morty: '' });

	useEffect(() => {
		const dataWithoutDeletedCharacters: any = differenceBy(data, deletedCharactersList, 'id');
		setFilteredData(dataWithoutDeletedCharacters);
	}, [data, deletedCharactersList]); // https://github.com/facebook/react/issues/16461

	const handleClose = (e: React.MouseEvent<HTMLElement>): void => {
		const currentDeletedElement = (e.target as HTMLElement).getAttribute('data-id');
		const deletedCharacter = filteredData.filter((character: ICharacter) => character.id === currentDeletedElement);
		setDeletedCharactersList([...deletedCharactersList, ...deletedCharacter]);
	};

	const handleImageClick = (e: React.MouseEvent<HTMLElement>): void => {
		const clickedImageUrl: string = (e.target as HTMLElement).getAttribute('src') || '';
		const clickedImageCharacterName: string = (e.target as HTMLElement).getAttribute('alt') || '';

		const addPartyCharacter = (name: string): { rick: string; morty: string } => ({ ...partyCharacters, [name]: clickedImageUrl });
		const addClickedInfo = (name: string): { rick: string; morty: string } => ({ ...clicked, [name]: clickedImageUrl });

		if (/Rick/.exec(clickedImageCharacterName)) {
			setClicked(addClickedInfo('rick'));
			setPartyCharacters(addPartyCharacter('rick'));
			setStorageItem('party', addPartyCharacter('rick'));
		} else if (/Morty/.exec(clickedImageCharacterName)) {
			setClicked(addClickedInfo('morty'));
			setPartyCharacters(addPartyCharacter('morty'));
			setStorageItem('party', addPartyCharacter('morty'));
		}
	};

	const getStyledImageState = (image: string, name: string): React.ReactElement => {
		if (clicked.rick === image || clicked.morty === image) {
			return <StyledImageClicked onClick={handleImageClick} src={image} alt={name} />;
		}
		return <StyledImage onClick={handleImageClick} src={image} alt={name} />;
	};

	return filteredData.map(({ id, image, name }: ICharacter) => (
		<StyledImageBlockContainer key={id}>
			{getStyledImageState(image, name)}
			<StyledCloseIcon onClick={handleClose} data-id={id}>
				&times;
			</StyledCloseIcon>
		</StyledImageBlockContainer>
	));
};
