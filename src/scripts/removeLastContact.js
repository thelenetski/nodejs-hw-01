import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

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
  writeContacts(JSON.stringify(data));
};

removeLastContact();
