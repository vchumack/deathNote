import styled from 'styled-components';

export const UserMenuBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 100px;
	gap: 20px;
	/* background-color: aliceblue; */
`;

export const UserMenuText = styled.p`
	font-size: 16px;
	/* color: #f27b7b; */
`;

export const UserMenuBtn = styled.button`
	width: 70px;
	height: 40px;
	/* margin-top: 20px;
	width: 120px;
	height: 40px; */
	padding: 5px;

	/* font-size: 14px;
	font-weight: 700; */

	font-family: 'deathNote';
	font-size: 18px;
	font-weight: 700;

	opacity: 1;
	background: #faacacfa;
	background-image: linear-gradient(to left, #ed0606, #d39393);
	background-image: #9e0e0e;
	border: 2px solid #d39292;
	background: #e14a4ab8;

	color: transparent;
	background-clip: text;
	-webkit-background-clip: text;

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
