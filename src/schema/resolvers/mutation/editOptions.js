module.exports = {
  Mutation: {
    editOptions: async (_, { id, input }, { knex }) => {
      knex
        .transaction(async (trx) => {
          const [userOptions] = await trx('users_options')
            .where({ user_id: id })
            .update(
              {
                user_id: id,
                input,
              },
              ['description', 'role', 'languages', 'created_at'],
            );
          return userOptions;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
