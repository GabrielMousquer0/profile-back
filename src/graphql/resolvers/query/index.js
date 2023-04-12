const users = (_, __, { knex }) => {
  return knex('users').select('*');
};

const languagesUser = async (_, { id }, { knex }) => {
  return await knex('users_languages')
    .join('languages', 'languages.id', 'users_languages.language')
    .where('user', id);
};

module.exports = { users, languagesUser };
