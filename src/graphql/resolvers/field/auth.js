module.exports = {
  User: {
    auth: async ({ id }, _, { knex }) => {
      return knex('users').first('email').where({ id });
    },
  },
};
