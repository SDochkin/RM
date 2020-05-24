import styled from 'styled-components';

interface ITest {
	image?: string;
}

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
export const StyledCharactersBlock = styled.div<ITest>`
	display: flex;
	justify-content: center;
	width: 180px;
	height: 220px;
	background: ${({ image }) => image || '#dadada'};
	background-size: cover;
`;

export const StyledCharacterImage = styled.img`
	width: 100%;
	height: 100%;
`;

export const StyledCharacterName = styled.p`
	display: flex;
	margin-top: auto;
	margin-bottom: 30px;
	font-weight: 300;
	font-size: 24px;
	line-height: 28px;
	text-align: center;
	color: #fff;
	text-transform: uppercase;
`;
