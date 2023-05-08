module.exports = {
  User: {
    languages: async ({ id }, _, { knex }) => {
      return knex
        .transaction(function (trx) {
          return trx('users_languages')
            .innerJoin('languages', 'languages.id', 'users_languages.language')
            .where('users_languages.user', id);
        })
        .then((result) => {
          return result;
        })
        .catch((error) => {
          return console.log(error);
        });
    },
  },
};
