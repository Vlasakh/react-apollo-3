import axios from 'axios';
import { setUsersTable, usersTable } from '../DB';

const createUser = ({ id, ...input }) => ({ id: id || +new Date(), ...input });
const remapUsersFromAPI = ({ id, firstName, lastName, maidenName: username, email, address, company }) => ({
  id,
  name: firstName + ' ' + lastName,
  username,
  email,
  address: `${address.city}, ${address.street}`,
  company: company.name,
});

export const root = {
  initDb: async ({ limit = 5 }) => {
    console.log('❗limit', limit);
    try {
      let users = axios(`https://dummyjson.com/users?limit=${limit}`);
      users = await users;

      users = users.data.users.map(remapUsersFromAPI);
      setUsersTable(users);

      return users;
    } catch (e) {
      console.error('❗e', e.message);
    }
  },
  getSuggestionUsers: async () => {
    try {
      let users = axios(`https://dummyjson.com/users?skip=50&limit=10`);

      users = await users;
      users = users.data.users.map(remapUsersFromAPI);

      return users;
    } catch (e) {
      console.error('❗e', e.message);
    }
  },
  getAllUsers: () => {
    return usersTable;
  },
  createUser: ({ input }) => {
    let user = createUser(input);
    usersTable.push(user);
    return user;
  },
  updateUser: ({ input }) => {
    const idx = usersTable.findIndex(({ id }) => id === input.id);

    if (idx !== -1) {
      const users = [...usersTable];
      users[idx] = input;
      setUsersTable(users);
      return users[idx];
    } else {
      throw new Error("Didn't find then user");
    }
  },

  getStaticUsers: async () => {
    try {
      let users = axios(`https://dummyjson.com/users?limit=10`);

      users = await users;
      users = users.data.users.map(remapUsersFromAPI);

      return users;
    } catch (e) {
      console.error('❗e', e.message);
    }
  },
};
