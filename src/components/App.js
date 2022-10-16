import { lazy } from 'react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Layout } from './Layout';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { getIsFetchingCurrentUser } from 'redux/auth/authSelectors';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

// import { Home } from 'pages/Home';
const Home = lazy(() =>
	import('pages/Home').then(module => ({ ...module, default: module.Home }))
);
// import { ContactsView } from 'pages/ContactsView/ContactsView';
const ContactsView = lazy(() =>
	import('pages/ContactsView/ContactsView').then(module => ({
		...module,
		default: module.ContactsView,
	}))
);
// import { LoginView } from 'pages/LoginView';
const LoginView = lazy(() =>
	import('pages/LoginView').then(module => ({
		...module,
		default: module.LoginView,
	}))
);
// import { RegisterView } from 'pages/RegisterView';
const RegisterView = lazy(() =>
	import('pages/RegisterView').then(module => ({
		...module,
		default: module.RegisterView,
	}))
);

export function App() {
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
}
