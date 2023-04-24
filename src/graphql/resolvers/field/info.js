module.exports = {
  User: {
    infos: async ({ id }, _, { knex }) => {
      return knex('users')
        .first('created_at', 'role', 'avatar', 'description')
        .where({ id });
    },
  },
};
