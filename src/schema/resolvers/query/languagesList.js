module.exports = {
  Query: {
    languagesList: async (_, { id }, { knex }) => {
      knex
        .transaction(async (trx) => {
          return await trx('languages').whereNotExists(
            trx
              .select('*')
              .from('users_languages')
              .where({ user: id })
              .whereRaw('users_languages.language = languages.id'),
          );
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
