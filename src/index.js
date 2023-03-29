const { ApolloServer } = require('apollo-server');
const { resolvers, typeDefs } = require('./graphql/schemas.js');
const { context } = require('./graphql/context/');
require('dotenv').config();

const server = new ApolloServer({ typeDefs, resolvers, context });

server
  .listen({ port: process.env.SERVER_PORT })
  .then(({ url }) => console.log('Server Started at ' + url));
