import axios from 'axios';

let usersTable = [];
let postsTable = [];

export async function initDB() {
  let users = axios('https://jsonplaceholder.typicode.com/users');
  let posts = axios('https://jsonplaceholder.typicode.com/posts');

  users = await users;
  posts = await posts;

  usersTable = users.data.map(({ id, name, username, email, address, company }) => ({
    id,
    name,
    username,
    email,
    address: `${address.city}, ${address.street}`,
    company: company.name,
  }));
  postsTable = posts.data;
}
