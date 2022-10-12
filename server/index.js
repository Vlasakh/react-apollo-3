const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');
const { root } = require('./graphql/root');
const { initDB } = require('./DB');

const app = express();
app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root,
  }),
);

app.listen(5000, () => {
  console.log('server started on port 5000, http://localhost:5000');

  initDB();
});
