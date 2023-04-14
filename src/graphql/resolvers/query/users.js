const users = async (_, __, { knex }) => {
  const usersList = await knex('users').select('*');
  usersList.sort(function (a, b) {
    return a.id - b.id;
  });
  return usersList;
};

module.exports = { users };
