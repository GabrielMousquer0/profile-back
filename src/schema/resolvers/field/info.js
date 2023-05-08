module.exports = {
  User: {
    infos: async ({ id }, _, { knex }) => {
      knex
        .transaction((trx) => {
          return trx('users')
            .first('description', 'avatar', 'created_at', 'role')
            .where({ id });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
