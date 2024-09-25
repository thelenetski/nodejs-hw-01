import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const addOneContact = async () => {
  const data = await readContacts();

  data.push(createFakeContact());

  try {
    await fs.writeFile(PATH_DB, JSON.stringify(data));
    console.log('Контакт успішно додані до файлу.');
  } catch (err) {
    console.error('Помилка додавання даних до файлу:', err);
  }
};

addOneContact();
