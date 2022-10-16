import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
	display: flex;
	justify-content: center;
	padding: 10px 10px;
	font-size: 22px;
	background-color: black;

	font-family: 'deathNote';
	font-size: 40px;
	font-weight: 700;
	/* background-image: linear-gradient(
		180deg,
		rgba(105, 2, 210, 1) 0%,
		rgba(106, 53, 156, 1) 15%,
		rgba(181, 137, 214, 1) 55%,
		rgba(183, 163, 203, 1) 100%
	); */
`;
export const HeaderNav = styled.nav`
	display: flex;
`;

export const HeaderList = styled.div`
	display: flex;
	gap: 20px;
	margin-right: 30px;
	list-style: none;
`;

export const StyledNavLink = styled(NavLink)`
	text-decoration: none;
	/* font-family: 'Scada', sans-serif;
	font-size: 20px; */
	color: #ffffff;

	font-family: 'deathNote';
	font-size: 30px;
	font-weight: 700;

	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}
	&:focus,
	&:hover {
		color: grey;
	}
`;
