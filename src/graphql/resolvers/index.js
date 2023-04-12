const { users, languagesUser } = require('./query');
const { languages } = require('./field');
const {
  auth,
  register,
  editEmail,
  editUsername,
  editPassword,
  editAvatar,
  description,
  editLanguages,
} = require('./mutation');

const usersResolver = {
  Query: {
    users,
    languagesUser,
  },
  Mutation: {
    auth,
    register,
    editEmail,
    editUsername,
    editPassword,
    editAvatar,
    description,
    editLanguages,
  },
  User: {
    languages,
  },
};

module.exports = { usersResolver };
