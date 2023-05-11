module.exports = {
  Mutation: {
    editOptions: async (_, { id, input }, { knex }) => {
      await knex('users_options').where({ user_id: id }).del();
      const [userOptions] = await knex('users_options')
        .where({ user_id: id })
        .insert(
          {
            user_id: id,
            description: input.description,
            role: input.role,
            created_at: input.created_at,
            languages: input.languages,
          },
          ['description', 'role', 'languages', 'created_at'],
        );
      return userOptions;
    },
  },
};
