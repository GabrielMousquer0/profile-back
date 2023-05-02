module.exports = {
  Mutation: {
    insertLanguages: async (_, { id, language }, { knex }) => {
      if (
        await knex('users_languages')
          .first()
          .where({ user: id, language: language })
      ) {
        return false;
      }
      await knex('users_languages').insert({ user: id, language });
      return true;
    },
  },
};
