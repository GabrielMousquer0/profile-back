module.exports = {
  Mutation: {
    description: async (_, { description, id }, { knex }) => {
      return knex
        .transaction(async (trx) => {
          const [descUserUpdate] = await trx('users')
            .where({ id })
            .returning(['description', 'id'])
            .update({ description });
          return descUserUpdate;
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
