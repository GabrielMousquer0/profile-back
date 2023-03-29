const users = (_, __, { knex }) => {
  return knex('users').select('*');
};
module.exports = { users };
