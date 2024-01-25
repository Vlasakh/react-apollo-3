import axios from 'axios';
import { setUsersTable, usersTable } from '../../DB';
import { createUser, getAllUsers, remapUsersFromAPI } from './helpers';

export class UserResolvers {
  getResolvers() {
    return {
      getSuggestionUsers: this.getSuggestionUsers,
      getAllUsers: this.getAllUsers,
      getUser: this.getUser,
      getStaticUsers: this.getStaticUsers,
      createUser: this.createUser,
      updateUser: this.updateUser,
    };
  }

  async getSuggestionUsers() {
    try {
      let users = axios(`https://dummyjson.com/users?skip=50&limit=10`);

      users = await users;
      users = users.data.users.map(remapUsersFromAPI);

      return users;
    } catch (e) {
      console.error('❗e', e.message);
    }
  }

  getAllUsers() {
    return getAllUsers(usersTable);
  }

  createUser({ input }) {
    let user = createUser(input);
    usersTable.push(user);
    return user;
  }

  updateUser({ input }) {
    const idx = usersTable.findIndex(({ id }) => id === input.id);

    if (idx !== -1) {
      const users = [...usersTable];
      users[idx] = input;
      setUsersTable(users);
      return users[idx];
    } else {
      throw new Error("Didn't find then user");
    }
  }

  async getStaticUsers({ skip }) {
    console.log('❗getStaticUsers');
    try {
      let users = axios(`https://dummyjson.com/users?limit=10${skip ? `&skip=` + skip : ''}`);

      users = await users;
      users = users.data.users.map(remapUsersFromAPI);

      return users;
    } catch (e) {
      console.error('❗e', e.message);
    }
  }
}
