const searchUser = async (_, { username }, { knex }) => {
  const searchUsers = await knex('users').where({ username }).select('*');
  if (searchUsers == '') {
    return [{ id: 0 }];
  }
  searchUsers.sort(function (a, b) {
    return a.id - b.id;
  });
  return searchUsers;
};

module.exports = { searchUser };
