import axios from 'axios';

export let usersTable = [];
export let postsTable = [];

export async function initDB() {
  let posts = axios('https://jsonplaceholder.typicode.com/posts');

  posts = await posts;

  postsTable = posts.data;
}

export const setUsersTable = (data) => (usersTable = data);
