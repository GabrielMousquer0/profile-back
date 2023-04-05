const languages = async (_, { input, id }, { knex }) => {
  const myArray = [input.javascript, input.python, input.typescript];
  await knex('users')
    .where({ id })
    .returning('language')
    .update({ language: myArray });
  return input;
};

module.exports = { languages };
