module.exports = {
  Mutation: {
    description: async (_, { description, id }, { knex }) => {
      const [descUserUpdate] = await knex('users')
        .where({ id })
        .returning(['description', 'id'])
        .update({ description });
      return descUserUpdate;
    },
  },
};
