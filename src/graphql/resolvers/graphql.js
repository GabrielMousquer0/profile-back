const { users } = require('./query/');
const { auth } = require('./mutation');

const usersResolver = {
  Query: {
    users,
  },
  Mutation: {
    auth,
  },
};

module.exports = { usersResolver };
