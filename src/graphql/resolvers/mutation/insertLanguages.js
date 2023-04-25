module.exports = {
  Mutation: {
    insertLanguages: async (_, { id, languages }, { knex }) => {
      await knex('users_languages').where({ user: id }).del();

      const insertData = languages.map((i) => {
        return {
          user: id,
          language: i,
        };
      });
      await knex('users_languages').insert(insertData);
      await knex('users_languages').where('language', '=', 0).del();
      return await knex('users').first().where({ id });
    },
  },
};
