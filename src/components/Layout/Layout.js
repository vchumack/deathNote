import { Outlet } from 'react-router-dom';
import { Header, HeaderList, StyledNavLink, HeaderNav } from './Layout.styled';
import { Suspense } from 'react';
import { UserMenu } from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';

export const Layout = () => {
	const isLoggedIn = useSelector(getIsLoggedIn);
	return (
		<>
			<Header>
				<HeaderNav>
					<HeaderList>
						<StyledNavLink end to="/">
							Home
						</StyledNavLink>
						{isLoggedIn && (
							<StyledNavLink to="/contacts">Your Death List</StyledNavLink>
						)}
					</HeaderList>

					{isLoggedIn ? (
						<UserMenu />
					) : (
						<HeaderList>
							<li>
								<StyledNavLink to="/login">Login</StyledNavLink>
							</li>
							<li>
								<StyledNavLink to="/register">Registration</StyledNavLink>
							</li>
						</HeaderList>
					)}
				</HeaderNav>
			</Header>
			<main>
				<Suspense fallback={'Loading'}>
					<Outlet />
				</Suspense>
			</main>
		</>
	);
};
