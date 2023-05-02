module.exports = {
  Mutation: {
    deleteLanguages: async (_, { id, language }, { knex }) => {
      return !!(await knex('users_languages')
        .where({ user: id, language })
        .del());
    },
  },
};
