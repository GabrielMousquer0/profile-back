module.exports = {
  User: {
    options: async ({ id }, _, { knex }) => {
      return knex('users_options').first().where({ user_id: id });
    },
  },
};
