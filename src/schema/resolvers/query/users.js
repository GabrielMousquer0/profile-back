module.exports = {
  Query: {
    users: async (_, __, { knex }) => {
      knex
        .transaction((trx) => {
          return trx('users')
            .orderBy([{ column: 'id', order: 'asc' }])
            .select('*');
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
