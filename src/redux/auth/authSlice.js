import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, fetchCurrentUser } from './authOperations';

const initialState = {
	user: { name: null, email: null },
	token: null,
	isLoggedIn: false,
	isLoading: false,
	error: null,
	isFetchingCurrentUser: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: {
		[register.pending](state) {
			state.isLoading = true;
		},
		[register.fulfilled](state, { payload }) {
			state.error = null;
			state.isLoggedIn = true;
			state.isLoading = false;
			state.user = payload.user;
			state.token = payload.token;
		},
		[register.rejected](state, { payload }) {
			// console.log(payload);
			state.error = payload;
			state.isLoading = false;
		},

		[logIn.pending](state) {
			state.isLoading = true;
		},
		[logIn.fulfilled](state, { payload }) {
			state.error = null;
			state.isLoggedIn = true;
			state.isLoading = false;
			state.user = payload.user;
			state.token = payload.token;
		},
		[logIn.rejected](state, { payload }) {
			// console.log(payload);
			state.error = payload;
			state.isLoading = false;
		},

		[logOut.pending](state) {
			state.isLoading = true;
		},
		[logOut.fulfilled](state) {
			state.error = null;
			state.isLoggedIn = false;
			state.isLoading = false;
			state.user = { name: null, email: null };
			state.token = null;
		},
		[logOut.rejected](state, { payload }) {
			// console.log(payload);
			state.error = payload;
			state.isLoading = false;
		},

		//рефреш
		[fetchCurrentUser.pending](state) {
			state.isLoading = true;
			state.isFetchingCurrentUser = false;
		},
		[fetchCurrentUser.fulfilled](state, { payload }) {
			// console.log(payload);
			state.error = null;
			state.isLoggedIn = true;
			state.isLoading = false;
			state.isFetchingCurrentUser = true;
			state.user = payload;
		},
		[fetchCurrentUser.rejected](state, { payload }) {
			// console.log(payload);
			state.error = payload;
			state.isLoading = false;
			state.isFetchingCurrentUser = true;
		},
	},
});

export const authReducer = authSlice.reducer;
