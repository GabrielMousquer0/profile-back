module.exports = {
  Query: {
    languagesList: async (_, __, { knex }) => {
      return knex('languages')
        .orderBy([{ column: 'id', order: 'asc' }])
        .select('*');
    },
  },
};
