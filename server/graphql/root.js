import axios from 'axios';
import { setPostsTable, setUsersTable } from '../DB';
import { remapPostsFromAPI } from '../models/Posts/helpers';
import { UserResolvers } from '../models/Users/Resolvers';
import { getAllUsers, remapUsersFromAPI } from '../models/Users/helpers';
import { exampleLog } from '../models/cmd';

export const root = {
  ...new UserResolvers().getResolvers(),
  initDb: async ({ limit = 5 }) => {
    try {
      let users = axios(`https://dummyjson.com/users?limit=${limit}`);
      let posts = axios(`https://dummyjson.com/posts?limit=${limit * 2}`);

      users = await users;
      users = new Map(users.data.users.map(remapUsersFromAPI));
      setUsersTable(users);

      posts = await posts;
      posts = new Map(remapPostsFromAPI(posts.data.posts));
      setPostsTable(posts);

      return getAllUsers(users);
    } catch (e) {
      console.error('❗e', e.message);
    }
  },
  runCmd: () => {
    const resp = exampleLog();

    return { body: JSON.stringify(resp) };
  },
};
