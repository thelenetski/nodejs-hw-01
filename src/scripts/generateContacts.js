import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

const generateContacts = async (number) => {
  if (typeof number !== 'number') {
    return console.log('помилка данних, повинно бути число');
  }

  const data = await readContacts();

  const contactsArray = [];

  for (let i = 0; i < number; i++) {
    contactsArray.push(createFakeContact());
  }

  let summaryContacts;
  Array.isArray(data)
    ? (summaryContacts = data.concat(contactsArray))
    : (summaryContacts = contactsArray);

  try {
    await fs.writeFile(PATH_DB, JSON.stringify(summaryContacts));
    console.log('Дані успішно додані до файлу.');
  } catch (err) {
    console.error('Помилка додавання даних до файлу:', err);
  }
};

generateContacts(5);
