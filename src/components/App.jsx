import { useState, useEffect } from 'react';
import { Box } from './Box';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { TitlePhonebook, SecondTitlePhonebook } from './App.styled';
import { Report } from 'notiflix/build/notiflix-report-aio';

const initialContacts = [
	{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
	{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
	{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
	{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export function App() {
	const parsedContacts = JSON.parse(localStorage.getItem('myContactList'));
	const [contacts, setContacts] = useState(() =>
		parsedContacts.length > 0
			? parsedContacts
			: initialContacts
	);

	//! работает и с тернарником выше, и с useEffect ниже, но только если выключен StrictMode. Как всё-таки правильно?
	// useEffect(() => {
	// 	const parsedContacts = JSON.parse(localStorage.getItem('myContactList'));
	// 	console.log('parsedContacts', parsedContacts);
	// 	// сработает 1 раз при моунте компонента. поэтому зависимости не указываем, аналог componentDidMount
	// 	if (parsedContacts && parsedContacts.length > 0) {
	// 		setContacts(parsedContacts);
	// 	}
	// }, []);

  const [filter, setFilter] = useState('');

	// здесь вытаскиваем данные, если они есть, благодаря установке зависимости, аналог componentDidUpdate
	useEffect(() => {
		localStorage.setItem('myContactList', JSON.stringify(contacts));
	}, [contacts]);

	const setValueSubmitForm = data => {
		if (checkAddingContacts(data.name)) {
			Report.info(`${data.name} is already in contacts!`);
			return;
		}

		setContacts(prevContacts => [...prevContacts, data]);
	};

	const handleChangeInputFilter = e => {
		const { value } = e.currentTarget;
		setFilter(value);
	};

	const checkAddingContacts = name => {
		return contacts.find(el => el.name.toLowerCase() === name.toLowerCase());
	};

	const filterContacts = () => {
		const lowerFilter = filter.toLowerCase();
		return contacts.filter(el => {
			return el.name.toLowerCase().includes(lowerFilter);
		});
	};

	const handleDeleteBtnClick = id => {
		setContacts(contacts.filter(el => el.id !== id));
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
		>
			<TitlePhonebook>Phonebook</TitlePhonebook>
			<ContactForm submitForm={setValueSubmitForm} />
			<SecondTitlePhonebook>Contacts</SecondTitlePhonebook>
			<Filter changeInput={handleChangeInputFilter} />
			<ContactList
				contacts={visibleContacts}
				deleteBtn={handleDeleteBtnClick}
			/>
		</Box>
	);
}
