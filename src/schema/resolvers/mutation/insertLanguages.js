module.exports = {
  Mutation: {
    insertLanguages: async (_, { id, language }, { knex }) => {
      knex
        .transaction(async (trx) => {
          return !!(await trx('users_languages').insert({
            user: id,
            language,
          }));
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
