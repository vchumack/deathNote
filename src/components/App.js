import { ContactsView } from 'pages/ContactsView/ContactsView';
import { Home } from 'pages/Home';
import { LoginView } from 'pages/LoginView';
import { RegisterView } from 'pages/RegisterView';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { getIsFetchingCurrentUser } from 'redux/auth/authSelectors';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const App = () => {
	const dispatch = useDispatch();
	const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);

	useEffect(() => {
		dispatch(fetchCurrentUser());
	}, [dispatch]);

	return (
		isFetchingCurrentUser && (
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route
						// path="home"
						index
						element={
							<PublicRoute>
								<Home />
							</PublicRoute>
						}
					/>

					<Route
						path="contacts"
						element={
							<PrivateRoute redirect="/login">
								<ContactsView />
							</PrivateRoute>
						}
					/>

					<Route
						path="login"
						element={
							<PublicRoute restricted redirect="/contacts">
								<LoginView />
							</PublicRoute>
						}
					/>

					<Route
						path="register"
						element={
							<PublicRoute restricted redirect="/contacts">
								<RegisterView />
							</PublicRoute>
						}
					/>

					<Route path="*" element={<Navigate to="/" />} />
				</Route>
			</Routes>
		)
	);
};
