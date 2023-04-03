const { users } = require('./query');
const {
  auth,
  register,
  editEmail,
  editUsername,
  editPassword,
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
  },
};

module.exports = { usersResolver };
