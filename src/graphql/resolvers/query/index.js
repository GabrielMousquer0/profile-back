const users = (_, __, { knex }) => {
  return knex('users').select('*');
};

const languagesUser = async (_, { id }, { knex }) => {
  return await knex('users_languages')
    .join('languages', 'languages.id', 'users_languages.language')
    .where('user', id);
};

const viewUser = async (_, { id }, { knex }) => {
  return await knex('users')
    .first(['id', 'username', 'created_at', 'role', 'avatar', 'description'])
    .where({ id });
};

module.exports = { users, languagesUser, viewUser };
