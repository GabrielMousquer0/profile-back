module.exports = {
  Mutation: {
    searchUsers: async (_, { username }, { knex }) => {
      return knex('users')
        .where({ username })
        .orderBy([{ column: 'id', order: 'asc' }]);
    },
  },
};
