import styled from 'styled-components';

export const UserMenuBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 100px;

	gap: 20px;
	/* font-family: 'Comic Sans MS', sans-serif; */
	/* background-color: aliceblue; */
`;

export const UserMenuText = styled.p`
	font-family: 'Comic Sans MS', sans-serif;
	font-size: 14px;
	/* color: #f27b7b; */
`;

export const UserMenuBtn = styled.button`
	/* margin-top: 20px; */
	/* padding-bottom: 10px; */
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100px;
	height: 35px;
	padding-bottom: 10px;
	padding-top: 3px;
	padding-left: 64px;
	padding-right: 64px;

	font-family: 'deathNote';
	font-size: 28px;
	font-weight: 700;

	opacity: 1;

	background-image: linear-gradient(to left, #ed0606, #d39393);
	background-image: #9e0e0e;

	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;
	border: 2px solid #d39292;
	cursor: pointer;

	transition: transform 250ms linear;

	:hover {
		transform: scale(1.1);
	}

	:disabled {
		opacity: 0.5;
		transform: scale(1);
	}
`;
