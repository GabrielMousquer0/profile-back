module.exports = {
  Query: {
    viewUser: async (_, { id }, { knex }) => {
      return await knex('users')
        .first([
          'id',
          'username',
          'created_at',
          'role',
          'avatar',
          'description',
        ])
        .where({ id });
    },
  },
};
