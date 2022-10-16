import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const initialContacts = {
	items: [],
	isLoading: false,
	error: null,

	filter: '',
};

const contactsSlice = createSlice({
	name: 'contacts',
	initialState: initialContacts,
	reducers: {
		changeFilter(state, { payload }) {
			// у нас есть стейт фильтр, и мы хотим положить в него то, что передадим в апп value(наш payload))
			state.filter = payload;
		},
	},

	extraReducers: {
		[fetchContacts.pending](state) {
			state.isLoading = true;
		},
		[fetchContacts.fulfilled](state, { payload }) {
			state.isLoading = false;
			state.error = null;
			state.items = payload;
		},
		[fetchContacts.rejected](state, { payload }) {
			state.isLoading = false;
			state.error = payload;
		},

		[addContact.pending](state) {
			state.isLoading = true;
		},
		[addContact.fulfilled](state, { payload }) {
			state.isLoading = false;
			state.error = null;
			state.items = [...state.items, payload];
		},
		[addContact.rejected](state, { payload }) {
			state.isLoading = false;
			state.error = payload;
		},

		[deleteContact.pending](state) {
			state.isLoading = true;
		},
		[deleteContact.fulfilled](state, { payload }) {
			state.isLoading = false;
			state.error = null;
			state.items = state.items.filter(el => el.id !== payload);
		},
		[deleteContact.rejected](state, { payload }) {
			state.isLoading = false;
			state.error = payload;
		},
	},
});

export const { changeFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
