module.exports = {
  Query: {
    languagesList: async (_, { id }, { knex }) => {
      return knex
        .transaction(async (trx) => {
          return await trx('languages').whereNotExists(
            trx
              .select('*')
              .from('users_languages')
              .where({ user: id })
              .whereRaw('users_languages.language = languages.id'),
          );
        })
        .then((result) => {
          return result;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
