const editLanguages = async (_, { id, languages }, { knex }) => {
  await knex('users_languages').where({ user: id }).del();

  const insertData = languages.map((i) => {
    return {
      user: id,
      language: i,
    };
  });

  return !(await knex('users_languages').insert(insertData));
};

module.exports = { editLanguages };
