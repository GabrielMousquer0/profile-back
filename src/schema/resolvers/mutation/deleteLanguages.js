module.exports = {
  Mutation: {
    deleteLanguages: async (_, { id, language }, { knex }) => {
      knex
        .transaction(async (trx) => {
          return !!(await trx('users_languages')
            .where({ user: id, language })
            .del());
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
