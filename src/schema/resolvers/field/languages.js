module.exports = {
  User: {
    languages: async ({ id }, _, { knex }) => {
      knex
        .transaction(function (trx) {
          return trx('users_languages')
            .innerJoin('languages', 'languages.id', 'users_languages.language')
            .where('users_languages.user', id);
        })
        .catch((error) => {
          return console.log(error);
        });
    },
  },
};
