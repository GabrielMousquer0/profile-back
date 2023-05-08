module.exports = {
  Query: {
    user: async (obj, { id }, { knex }) => {
      knex
        .transaction((trx) => {
          return trx('users').first().where({ id });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
