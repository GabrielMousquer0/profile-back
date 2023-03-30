const { gql } = require('apollo-server');

const typeUsers = gql`
  extend type Query {
    users: [User!]!
  }

  extend type Mutation {
    auth(email: String!, password: String!): User!
    register(
      email: String!
      username: String!
      password: String!
      id: ID!
    ): Boolean!
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
