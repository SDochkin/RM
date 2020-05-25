import styled from 'styled-components';

export const StyledMainContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	width: 100%;
	height: 100vh;
	padding: 140px 195px 0px 195px;
`;

export const StyledImagesBlock = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	width: 810px;
	margin-bottom: 70px;
`;

export const StyledPartyBlock = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	width: 390px;
	margin-bottom: 50px;
`;
export const StyledPartyHeader = styled.h1`
	margin: 0;
	margin-bottom: 20px;
	font-weight: bold;
	font-size: 30px;
	line-height: 35px;
	text-align: center;
	text-transform: uppercase;
`;
export const StyledCharactersContainer = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	width: 100%;
`;
export const StyledCharactersBlock = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	background: #dadada;
	width: 180px;
	height: 220px;
`;

export const StyledCharacterImage = styled.img`
	position: relative;
	z-index: 100;
	width: 100%;
	height: 100%;
	background: transparent;
`;

export const StyledCharacterName = styled.span`
	position: absolute;
	z-index: 10;
	width: 100%;
	bottom: 30px;
	font-weight: 300;
	font-size: 24px;
	line-height: 28px;
	text-align: center;
	color: #fff;
	text-transform: uppercase;
`;
