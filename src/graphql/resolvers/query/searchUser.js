const searchUser = async (_, { username }, { knex }) => {
  return await knex('users').where({ username }).select('*');
};

module.exports = { searchUser };
