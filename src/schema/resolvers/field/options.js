module.exports = {
  User: {
    options: async ({ id }, _, { knex }) => {
      knex
        .transaction((trx) => {
          return trx('users_options').first().where({ user_id: id });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
