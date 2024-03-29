const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type User {
    id: ID
    name: String
    username: String
    email: String
    address: String
    company: String
  }
  type Post {
    user: User
    id: ID
    title: String
    body: String 
  }
  
  type CmdResponse {
    body: String 
  }
  
  input UserInput {
    id: ID
    name: String
    username: String
    email: String
    address: String
    company: String
  }
  input PostInput {
    id: ID
    title: String!
    content: String!
  }
  
  type Query {
    getSuggestionUsers: [User]
    getAllUsers: [User]
    getUser(id: ID): User

    getStaticUsers(skip: Int): [User]
  }  
  type Mutation {
    initDb(limit: Int): [User]
    createUser(input: UserInput): User
    updateUser(input: UserInput): User

    runCmd: CmdResponse
  }
`);

module.exports = schema;
