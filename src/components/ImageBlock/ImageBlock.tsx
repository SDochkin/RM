import React, { useState, useEffect } from 'react';
import differenceBy from 'lodash/differenceBy';

import { StyledImageBlockContainer, StyledImage, StyledCloseIcon } from './styled';

interface IImageBlock {
	id: string;
	image: string;
	name: string;
}

export const ImageBlock: React.FC<any> = ({ data, partyCharacters, setPartyCharacters }): any => {
	const [filteredData, setFilteredData] = useState([]);
	const [deletedCharactersList, setDeletedCharactersList] = useState([]);
	useEffect(() => {
		const dataWithoutDeletedCharacters: any = differenceBy(data, deletedCharactersList, 'id');
		setFilteredData(dataWithoutDeletedCharacters);
	}, [data, deletedCharactersList]); // https://github.com/facebook/react/issues/16461

	const handleClose = (e: React.MouseEvent<HTMLElement>): void => {
		const currentDeletedElement = (e.target as HTMLElement).getAttribute('data-id');
		const deletedCharacter = filteredData.filter((item: any) => item.id === currentDeletedElement);
		setDeletedCharactersList([...deletedCharactersList, ...deletedCharacter]);
	};

	const handleImageClick = (e: React.MouseEvent<HTMLElement>): void => {
		const clickedImageUrl = (e.target as HTMLElement).getAttribute('src');
		const clickedImageCharacterName: any = (e.target as HTMLElement).getAttribute('alt');
		if (/Rick/.exec(clickedImageCharacterName)) {
			setPartyCharacters({ ...partyCharacters, rick: `url(${clickedImageUrl})` });
			localStorage.setItem('party', JSON.stringify({ ...partyCharacters, rick: `url(${clickedImageUrl})` }));
		} else if (/Morty/.exec(clickedImageCharacterName)) {
			setPartyCharacters({ ...partyCharacters, morty: `url(${clickedImageUrl})` });
		}
		localStorage.setItem('party', JSON.stringify({ ...partyCharacters, morty: `url(${clickedImageUrl})` }));
	};

	return filteredData.map(({ id, image, name }: IImageBlock) => (
		<StyledImageBlockContainer key={id}>
			<StyledImage onClick={handleImageClick} src={image} alt={name} />
			<StyledCloseIcon onClick={handleClose} data-id={id}>
				&times;
			</StyledCloseIcon>
		</StyledImageBlockContainer>
	)); // можно вынести в компонент
};
