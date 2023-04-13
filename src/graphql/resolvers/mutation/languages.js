const editLanguages = async (_, { id, languages }, { knex }) => {
  await knex('users_languages').where({ user: id }).del();
  const obj = {
    js: languages.find((langId) => langId == 1),
    py: languages.find((langId) => langId == 2),
    ts: languages.find((langId) => langId == 3),
  };

  if (obj.js) {
    await knex('users_languages').insert({ user: id, language: 1 });
  }
  if (obj.py) {
    await knex('users_languages').insert({ user: id, language: 2 });
  }
  if (obj.ts) {
    await knex('users_languages').insert({ user: id, language: 3 });
  }
  return true;
};

module.exports = { editLanguages };
