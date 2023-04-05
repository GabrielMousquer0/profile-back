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
    editAvatar(avatar: String, id: ID!): User!
    description(description: String, id: ID!): User!
    languages(input: LanguageInput, id: ID!): langs!
  }

  type User {
    id: ID!
    username: String
    password: String!
    email: String!
    created_at: String
    role: String
    avatar: String
    description: String
    language: [langs]
  }

  type langs {
    javascript: String
    python: String
    typescript: String
  }
  
  input LanguageInput {
    javascript: String
    python: String
    typescript: String
  }
`;

module.exports = { typeUsers };
