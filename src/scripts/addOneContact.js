import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const data = await readContacts();

  data.push(createFakeContact());

  writeContacts(JSON.stringify(data));
};

addOneContact();
