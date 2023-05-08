module.exports = {
  Mutation: {
    deleteLanguages: async (_, { id, language }, { knex }) => {
      return knex
        .transaction(async (trx) => {
          return !!(await trx('users_languages')
            .where({ user: id, language })
            .del());
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
