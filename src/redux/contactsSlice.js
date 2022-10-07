import { createSlice } from '@reduxjs/toolkit';

const initialContacts = {
	contacts: [
		{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
		{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
		{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
		{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
	],
	filter: '',
};

const contactsSlice = createSlice({
	name: 'contacts',
	initialState: initialContacts,
	reducers: {
		addContacts(state, { payload }) {
			state.contacts.push(payload);
		},
		deleteContacts(state, { payload }) {
			// const index = state.findIndex(task => task.id === action.payload);
			// state.splice(index, 1);
			state.contacts = state.contacts.filter(el => el.id !== payload);
		},
		changeFilter(state, { payload }) {
			// у нас есть стейт фильтр, и мы хотим положить в него то, что передадим в апп value(наш payload))
			state.filter = payload;
		},
	},
});

export const { addContacts, changeFilter, deleteContacts } =
	contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
