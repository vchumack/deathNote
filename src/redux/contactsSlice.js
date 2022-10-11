import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialContacts = {
	contacts: {
		items: [],
		isLoading: false,
		error: null,
	},
	filter: '',
};

const contactsSlice = createSlice({
	name: 'contacts',
	initialState: initialContacts,
	reducers: {
		// addContacts(state, { payload }) {
		// 	state.contacts.push(payload);
		// },
		// deleteContacts(state, { payload }) {
		// 	state.contacts = state.contacts.filter(el => el.id !== payload);
		// },
		changeFilter(state, { payload }) {
			// у нас есть стейт фильтр, и мы хотим положить в него то, что передадим в апп value(наш payload))
			state.filter = payload;
		},
	},

	extraReducers: {
		[fetchContacts.pending]({ contacts }) {
			contacts.isLoading = true;
		},
		[fetchContacts.fulfilled]({ contacts }, { payload }) {
			contacts.isLoading = false;
			contacts.error = null;
			contacts.items = payload;
		},
		[fetchContacts.rejected]({ contacts }, { payload }) {
			contacts.isLoading = false;
			contacts.error = payload;
		},

		[addContact.pending]({ contacts }) {
			contacts.isLoading = true;
		},
		[addContact.fulfilled]({ contacts }, { payload }) {
			contacts.isLoading = false;
			contacts.error = null;
			contacts.items = [...contacts.items, payload];
		},
		[addContact.rejected]({ contacts }, { payload }) {
			contacts.isLoading = false;
			contacts.error = payload;
		},

		[deleteContact.pending]({ contacts }) {
			contacts.isLoading = true;
		},
		[deleteContact.fulfilled]({ contacts }, { payload }) {
			contacts.isLoading = false;
			contacts.error = null;
			contacts.items = contacts.items.filter(el => el.id !== payload.id);
		},
		[deleteContact.rejected]({ contacts }, { payload }) {
			contacts.isLoading = false;
			contacts.error = payload;
		},
	},
});

export const { addContacts, changeFilter, deleteContacts } =
	contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
