/* eslint-disable prettier/prettier */
const { gql } = require('apollo-server');

const typeUsers = gql`
  extend type Query {
    users: [User!]!
  }

  extend type Mutation {
    auth(email: String!, password: String!): User!
    register(email: String!, username: String!, password: String!): Boolean!
    edit(email: String, username: String, password: String, avatar: String, id: ID!): User!
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
