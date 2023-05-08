module.exports = {
  Mutation: {
    searchUsers: async (_, { username }, { knex }) => {
      knex
        .transaction(async (trx) => {
          return trx('users')
            .where({ username })
            .orderBy([{ column: 'id', order: 'asc' }]);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
