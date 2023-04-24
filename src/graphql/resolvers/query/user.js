module.exports = {
  Query: {
    user: async (obj, { id }, { knex }) => {
      return knex('users').first().where({ id });
    },
  },
};
