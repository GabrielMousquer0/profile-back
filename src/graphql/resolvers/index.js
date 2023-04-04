const { users } = require('./query');
const {
  auth,
  register,
  editEmail,
  editUsername,
  editPassword,
  editAvatar,
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
  },
};

module.exports = { usersResolver };
