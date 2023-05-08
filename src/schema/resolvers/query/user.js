module.exports = {
  Query: {
    user: async (obj, { id }, { knex }) => {
      return knex
        .transaction((trx) => {
          return trx('users').first().where({ id });
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
