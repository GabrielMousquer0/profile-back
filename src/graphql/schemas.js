/* eslint-disable */
const { gql } = require('apollo-server');

const rootTypeDefs = gql`
  type Query {
  _empty: Boolean!
}
type Mutation {
  _empty: Boolean!
}
`;

const rootResolvers = {
  Query: {
      _empty: () => true,
  },
  Mutation: {
      _empty: () => true,
  }
};

module.exports = {
  resolvers: [rootResolvers],
  typeDefs: [rootTypeDefs]
};