import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const data = await readContacts();
  return data.reduce((acc) => (acc += 1), 0);
};

console.log(await countContacts());
