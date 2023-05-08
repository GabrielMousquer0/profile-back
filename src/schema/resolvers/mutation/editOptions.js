module.exports = {
  Mutation: {
    editOptions: async (_, { id, input }, { knex }) => {
      return knex
        .transaction(async (trx) => {
          const [userOptions] = await trx('users_options')
            .where({ user_id: id })
            .update(
              {
                user_id: id,
                description: input.description,
                languages: input.languages,
                role: input.role,
                created_at: input.created_at,
              },
              ['description', 'role', 'languages', 'created_at'],
            );
          return userOptions;
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
