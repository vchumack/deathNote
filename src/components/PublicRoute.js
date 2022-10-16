import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../redux/auth/authSelectors';

export function PublicRoute({ children, restricted = false, redirect = '/' }) {
	const isLoggedIn = useSelector(getIsLoggedIn);
	const shouldRedirect = isLoggedIn && restricted;
	return shouldRedirect ? <Navigate to={redirect} /> : children;
}
