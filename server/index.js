const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');
const { root } = require('./graphql/root');
const { initDB } = require('./DB');
const { routes } = require('./routes');
const bodyParser = require('body-parser');

// Middleware to parse JSON in the request body

export const PORT = process.env.SERVER_PORT;

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root,
  }),
);

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}, http://localhost:${PORT}`);

  initDB();
});
