// import { useState, useEffect } from 'react';
import { Box } from '../../components/Box';
import { ContactForm } from '../../components/ContactForm';
import { ContactList } from '../../components/ContactList';
import { Filter } from '../../components/Filter';
import { TitlePhonebook, SecondTitlePhonebook } from './ContactsView.styled';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contactsSlice';
import {
	fetchContacts,
	addContact,
	deleteContact,
} from '../../redux/contacts/contactsOperations';
import { useEffect } from 'react';
import {
	getContactsFilter,
	getContactsItems,
	getContactsError,
} from '../../redux/contacts/contactsSelectors';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { useNavigate } from 'react-router-dom';
// import pero from 'img/whitepretty.png';

export function ContactsView() {
	const items = useSelector(getContactsItems);
	const filterState = useSelector(getContactsFilter);
	const error = useSelector(getContactsError);
	const login = useSelector(getIsLoggedIn);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	if (error) {
		Report.failure(`Error. Pls try again`);
	}

	useEffect(() => {
		// если не залогинены, то перекинуть на стр логина
		// if (!login) {
		// 	navigate('/login');
		// }
		dispatch(fetchContacts());
	}, [dispatch, login, navigate]);

	const setValueSubmitForm = data => {
		if (checkAddingContacts(data.name)) {
			Report.info(`${data.name} is already in contacts!`);
			return;
		}
		console.log(data);
		dispatch(addContact(data));
	};

	const checkAddingContacts = name => {
		return items.find(el => el.name.toLowerCase() === name.toLowerCase());
	};

	const filterContacts = () => {
		const lowerFilter = filterState.toLowerCase();
		return items.filter(el => {
			return el.name.toLowerCase().includes(lowerFilter);
		});
	};

	const visibleContacts = filterContacts();

	return (
		<Box
			width="800px"
			pb={2}
			pt={2}
			pl={6}
			pr={6}
			ml="auto"
			mr="auto"
			mt={5}
			mb={5}
			minHeight="1000px"
			borderRadius="10px"
			boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
			bg="black"
			// backgroundImage="url('img/whitepretty.png')"
			// backgroundPosition="center"
			// backgroundRepeat="no-repeat"
		>
			<TitlePhonebook>Death Note</TitlePhonebook>
			<ContactForm submitForm={setValueSubmitForm} />
			<SecondTitlePhonebook>List Of Death</SecondTitlePhonebook>
			<Filter
				changeInput={e => dispatch(changeFilter(e.currentTarget.value))}
			/>
			<ContactList
				contacts={visibleContacts}
				deleteBtn={id => dispatch(deleteContact(id))}
			/>
		</Box>
	);
}
