import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../../redux/auth/authSelectors';
import { logOut } from '../../redux/auth/authOperations';
import { UserMenuBox, UserMenuBtn, UserMenuText } from './UserMenu.styled';

export const UserMenu = () => {
	const dispatch = useDispatch();
	const name = useSelector(getUserName);

	return (
		<UserMenuBox>
			<UserMenuText>Hello, {name}</UserMenuText>
			<UserMenuBtn type="button" onClick={() => dispatch(logOut())}>
				Logout
			</UserMenuBtn>
		</UserMenuBox>
	);
};
