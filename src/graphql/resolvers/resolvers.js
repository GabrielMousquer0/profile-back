const { users } = require('./query');
const { auth, register, edit } = require('./mutation');

const usersResolver = {
  Query: {
    users,
  },
  Mutation: {
    auth,
    register,
    edit,
  },
};

module.exports = { usersResolver };
