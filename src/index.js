const { ApolloServer } = require('apollo-server');
const { schema } = require('./schema');
const { context } = require('./context/');
require('dotenv').config();

const server = new ApolloServer({ schema, context });

server
  .listen({ port: process.env.SERVER_PORT })
  .then(({ url }) => console.log('Server Started at ' + url));
