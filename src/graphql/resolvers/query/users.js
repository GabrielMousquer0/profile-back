module.exports = {
  Query: {
    users: async (_, __, { knex }) => {
      return knex('users')
        .orderBy([{ column: 'id', order: 'asc' }])
        .select('*');
    },
  },
};
