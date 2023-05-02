module.exports = {
  Query: {
    languagesList: async (_, { id }, { knex }) => {
      return await knex('languages').whereNotExists(
        knex
          .select('*')
          .from('users_languages')
          .where({ user: id })
          .whereRaw('users_languages.language = languages.id'),
      );
    },
  },
};
