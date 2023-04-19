module.exports = {
  Query: {
    searchUser: async (_, { username }, { knex }) => {
      const searchUsers = await knex('users')
        .where({ username })
        .orderBy([{ column: 'id', order: 'asc' }])
        .select('*');
      return searchUsers;
    },
  },
};
