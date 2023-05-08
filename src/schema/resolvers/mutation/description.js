module.exports = {
  Mutation: {
    description: async (_, { description, id }, { knex }) => {
      knex
        .transaction(async (trx) => {
          const [descUserUpdate] = await trx('users')
            .where({ id })
            .returning(['description', 'id'])
            .update({ description });
          return descUserUpdate;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
