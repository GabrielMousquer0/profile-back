module.exports = {
  User: {
    options: async ({ id }, _, { knex }) => {
      return knex
        .transaction((trx) => {
          return trx('users_options').first().where({ user_id: id });
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
