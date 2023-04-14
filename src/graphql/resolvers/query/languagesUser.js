const languagesUser = async (_, { id }, { knex }) => {
  const languages = await knex('users_languages')
    .join('languages', 'languages.id', 'users_languages.language')
    .where('user', id);
  if (languages == '') {
    return [{ id: 0 }];
  }

  return languages;
};

module.exports = { languagesUser };
