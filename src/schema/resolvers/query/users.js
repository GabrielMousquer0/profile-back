module.exports = {
  Query: {
    users: async (_, __, { knex }) => {
      return knex
        .transaction((trx) => {
          return trx('users')
            .orderBy([{ column: 'id', order: 'asc' }])
            .select('*');
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
