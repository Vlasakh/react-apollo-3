const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type User {
    id: ID
    name: String
    username: String
    email: String
    address: String
    company: String
    posts: [Post]
  }
  type Post {
    userId: ID
    id: ID
    title: String
    body: String 
  }
  
  input UserInput {
    id: ID
    username: String!
    age: Int!
    posts: [PostInput]
  }
  input PostInput {
    id: ID
    title: String!
    content: String!
  }
  
  type Query {
    getAllUsers: [User]
    getUser(id: ID): User
  }  
  type Mutation {
    createUser(input: UserInput): User
  }
`);

module.exports = schema;
