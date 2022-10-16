import styled from 'styled-components';

export const RegisterBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
export const RegisterTitle = styled.h1`
	font-size: 50px;
	padding: 0;
	margin: 0;
	margin-top: 20px;
	margin-bottom: 50px;

	background-image: linear-gradient(
		180deg,
		rgba(255, 5, 5) 0%,
		rgba(156, 53, 53, 1) 15%,
		rgba(227, 136, 136, 1) 55%,
		rgba(253, 253, 253, 1) 100%
	);

	color: transparent;
	background-clip: text;
	-webkit-background-clip: text;
`;

export const Form = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 30px;
`;

export const Input = styled.input`
	margin: 10px;

	display: block;
	width: 93%;
	margin: auto;
	padding: 13px;
	margin-top: 20px;

	box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
		rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
		rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

	outline: none;
	border: 0;

	border-radius: 20px;

	font-family: 'Roboto', sans-serif;

	background: rgb(245, 152, 152);
	background: linear-gradient(
		270deg,
		rgba(245, 152, 152, 0.533) 0%,
		rgba(246, 203, 203, 0.755) 36%,
		rgb(213, 133, 133) 75%,
		rgb(172, 124, 124) 100%
	);

	color: #f27b7b;

	:-webkit-autofill {
		transition: all 5000s ease-in-out 0s;
	}

	::placeholder {
		color: white;
	}
`;

export const Button = styled.button`
	margin-top: 20px;
	width: 70px;
	height: 30px;
	padding: 5px;

	font-family: 'deathNote';
	font-size: 20px;
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
