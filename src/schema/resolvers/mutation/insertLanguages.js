module.exports = {
  Mutation: {
    insertLanguages: async (_, { id, language }, { knex }) => {
      return !!(await knex('users_languages').insert({ user: id, language }));
    },
  },
};
