const { ApolloServer } = require('apollo-server');
const { schema } = require('./graphql/build');
const { context } = require('./graphql/context/');
require('dotenv').config();

const server = new ApolloServer({ schema, context });

server
  .listen({ port: process.env.SERVER_PORT })
  .then(({ url }) => console.log('Server Started at ' + url));
