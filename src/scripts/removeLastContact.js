import { readContacts } from '../utils/readContacts.js';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  const data = await readContacts();

  if (Array.isArray(data)) {
    if (data.length > 0) {
      data.pop();
    } else {
      return console.log('Немає контактів для видалення');
    }
  } else {
    return console.log('помилка данних файлу');
  }

  try {
    await fs.writeFile(PATH_DB, JSON.stringify(data));
    console.log('Останній контакт успішно видалено.');
  } catch (err) {
    console.error('Помилка додавання даних до файлу:', err);
  }
};

removeLastContact();
