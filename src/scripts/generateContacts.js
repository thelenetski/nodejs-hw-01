import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

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
  writeContacts(JSON.stringify(summaryContacts));
};

generateContacts(5);
