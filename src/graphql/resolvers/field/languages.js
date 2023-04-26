module.exports = {
  User: {
    languages: async ({ id }, _, { knex }) => {
      return knex('users_languages')
        .innerJoin('languages', 'languages.id', 'users_languages.language')
        .where('users_languages.user', id);
    },
  },
};
