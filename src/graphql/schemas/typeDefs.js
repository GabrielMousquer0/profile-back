/* eslint-disable prettier/prettier */
const { gql } = require('apollo-server');

const typeUsers = gql`
  extend type Query {
    users: [User!]!
  }

  extend type Mutation {
    auth(email: String!, password: String!): User!
    register(email: String!, username: String!, password: String!): Boolean!
    editEmail(email: String, id: ID!): User!
    editUsername(username: String, id: ID!): User!
    editPassword(password: String, id: ID!): User!
  }

  type User {
    id: ID!
    username: String
    password: String!
    email: String!
    created_at: String
    role: String
    avatar: String
  }
`;

module.exports = { typeUsers };
