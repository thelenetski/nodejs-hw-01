import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB);
    return JSON.parse(data).reduce((acc) => (acc += 1), 0);
  } catch (err) {
    console.error('Помилка читання файлу:', err);
  }
};

console.log(await countContacts());
