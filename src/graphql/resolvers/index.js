const { users } = require('./query');
const {
  auth,
  register,
  editEmail,
  editUsername,
  editPassword,
  editAvatar,
  description,
  languages,
} = require('./mutation');

const usersResolver = {
  Query: {
    users,
  },
  Mutation: {
    auth,
    register,
    editEmail,
    editUsername,
    editPassword,
    editAvatar,
    description,
    languages,
  },
};

module.exports = { usersResolver };
