const users = async (_, __, { knex }) => {
  const usersList = await knex('users')
    .orderBy([{ column: 'id', order: 'asc' }])
    .select('*');
  return usersList;
};

module.exports = { users };
