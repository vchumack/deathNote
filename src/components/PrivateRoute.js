import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../redux/auth/authSelectors';

export function PrivateRoute({ children, redirect }) {
	const isLoggedIn = useSelector(getIsLoggedIn);
	// после перезагрузки стр контактов возвращает фолс.
	// console.log(isLoggedIn);
	return <>{isLoggedIn ? children : <Navigate to={redirect} />}</>;
}
