module.exports = {
  Mutation: {
    insertLanguages: async (_, { id, language }, { knex }) => {
      return knex
        .transaction(async (trx) => {
          return !!(await trx('users_languages').insert({
            user: id,
            language,
          }));
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
