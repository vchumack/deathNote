import styled from 'styled-components';

export const RegisterBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
export const RegisterTitle = styled.h1`
	font-size: 60px;
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
	width: 500px;
	gap: 30px;
`;
export const Label = styled.label`
	width: 100%;
	font-family: 'Comic Sans MS', sans-serif;
`;

export const Input = styled.input`
	display: block;
	width: 100%;
	margin: 0;
	margin-top: 20px;
	padding: 13px;

	box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
		rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
		rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

	outline: none;
	border: 0;

	border-radius: 20px;

	font-family: 'Comic Sans MS', sans-serif;

	background: rgb(245, 152, 152);
	background: linear-gradient(
		270deg,
		rgba(245, 152, 152, 0.533) 0%,
		rgba(246, 203, 203, 0.755) 36%,
		rgb(213, 133, 133) 75%,
		rgb(172, 124, 124) 100%
	);

	color: white;

	:-webkit-autofill {
		transition: all 5000s ease-in-out 0s;
	}

	::placeholder {
		color: white;
	}
`;

export const Button = styled.button`
	margin-top: 20px;
	padding-bottom: 10px;
	width: 130px;
	height: 50px;

	font-family: 'deathNote';
	font-size: 35px;
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
