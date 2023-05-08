module.exports = {
  Mutation: {
    searchUsers: async (_, { username }, { knex }) => {
      return knex
        .transaction(async (trx) => {
          return trx('users')
            .where({ username })
            .orderBy([{ column: 'id', order: 'asc' }]);
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
