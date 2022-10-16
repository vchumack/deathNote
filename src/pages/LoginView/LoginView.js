import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { Box } from '../../components/Box';
import {
	LoginBox,
	LoginTitle,
	Form,
	Label,
	Input,
	Button,
	ImgBox,
} from './LoginView.styled';
import deathNote from 'img/dnlog.png';

export const LoginView = () => {
	const dispatch = useDispatch();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleChange = ({ target: { name, value } }) => {
		switch (name) {
			case 'mail':
				setEmail(value);
				break;
			case 'password':
				setPassword(value);
				break;

			default:
				break;
		}
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(logIn({ email, password }));

		setEmail('');
		setPassword('');
	};

	return (
		<Box
			width="800px"
			pb={2}
			pt={2}
			pl={6}
			pr={6}
			ml="auto"
			mr="auto"
			mt={5}
			mb={5}
			minHeight="1000px"
			borderRadius="10px"
			boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
			bg="black"
		>
			<LoginBox>
				<LoginTitle>LoginView</LoginTitle>

				<Form onSubmit={handleSubmit}>
					<Label>
						Email
						<Input
							type="mail"
							value={email}
							name="mail"
							placeholder="Enter yout email"
							onChange={handleChange}
						></Input>
					</Label>
					<Label>
						Password
						<Input
							type="text"
							name="password"
							value={password}
							placeholder="Enter yout password"
							onChange={handleChange}
						></Input>
					</Label>
					<Button type="submit">Log in</Button>
				</Form>

				<ImgBox>
					<img src={deathNote} width="900" alt="godOfGeath" />
				</ImgBox>
			</LoginBox>
		</Box>
	);
};
