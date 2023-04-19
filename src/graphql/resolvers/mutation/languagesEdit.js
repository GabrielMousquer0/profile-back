module.exports = {
  Mutation: {
    editLanguages: async (_, { id, languages }, { knex }) => {
      await knex('users_languages').where({ user: id }).del();

      const insertData = languages.map((i) => {
        return {
          user: id,
          language: i,
        };
      });
      return !!knex('users_languages')
        .insert(insertData)
        .then(async () => {
          await knex('users_languages').where('language', '=', 0).del();
        });
    },
  },
};
