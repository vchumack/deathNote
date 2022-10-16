import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { Box } from '../../components/Box';
import {
	RegisterBox,
	RegisterTitle,
	Form,
	Input,
	Button,
} from './RegisterView.styled';

export const RegisterView = () => {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleChange = ({ target: { name, value } }) => {
		switch (name) {
			case 'name':
				setName(value);
				break;
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
		dispatch(register({ name, email, password }));
		setName('');
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
			<RegisterBox>
				<RegisterTitle>RegisterView</RegisterTitle>
				<Form onSubmit={handleSubmit}>
					<label>
						Name
						<Input
							type="text"
							name="name"
							value={name}
							placeholder="Enter yout name"
							onChange={handleChange}
						></Input>
					</label>
					<label>
						Email
						<Input
							type="mail"
							name="mail"
							value={email}
							placeholder="Enter yout email"
							onChange={handleChange}
						></Input>
					</label>
					<label>
						Password
						<Input
							type="text"
							name="password"
							value={password}
							placeholder="Enter yout password"
							onChange={handleChange}
						></Input>
					</label>
					<Button type="submit">Create profile</Button>
				</Form>
			</RegisterBox>
		</Box>
	);
};
