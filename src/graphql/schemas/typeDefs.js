const { gql } = require('apollo-server');

const typeUsers = gql`
  extend type Query {
    users: [User!]!
  }

  extend type Mutation {
    auth(email: String!, password: String!): User!
  }

  type User {
    id: ID!
    username: String
    password: String!
    email: String!
    created_at: String
    role: String
  }
`;

module.exports = { typeUsers };
