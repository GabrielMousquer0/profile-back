module.exports = {
  User: {
    infos: async ({ id }, _, { knex }) => {
      return await knex('users')
        .first('description', 'avatar', 'created_at', 'role')
        .where({ id });
    },
  },
};
