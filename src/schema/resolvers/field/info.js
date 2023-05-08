module.exports = {
  User: {
    infos: async ({ id }, _, { knex }) => {
      return knex
        .transaction((trx) => {
          return trx('users')
            .first('description', 'avatar', 'created_at', 'role')
            .where({ id });
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
