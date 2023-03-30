const { users } = require('./query/');
const { auth, register } = require('./mutation');

const usersResolver = {
  Query: {
    users,
  },
  Mutation: {
    auth,
    register,
  },
};

module.exports = { usersResolver };
