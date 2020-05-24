import styled from 'styled-components';

export const StyledImageBlockContainer = styled.div`
	position: relative;
	width: 180px;
	height: 220px;
	margin-right: 30px;
	margin-bottom: 30px;

	&:nth-child(4n) {
		margin-right: 0;
	}
`;

export const StyledImage = styled.img`
	width: 100%;
	height: 100%;
	cursor: pointer;

	&:hover {
		border: 2px solid lightblue;
	}
`;

export const StyledCloseIcon = styled.span`
	position: absolute;
	top: 7px;
	right: 7px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background-color: rgba(255, 255, 255, 0.6);
	text-align: center;
	cursor: pointer;

	&:hover {
		background-color: #fff;
	}
`;
