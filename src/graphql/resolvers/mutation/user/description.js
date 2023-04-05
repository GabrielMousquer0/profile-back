const description = async (_, { description, id }, { knex }) => {
  const [descUserUpdate] = await knex('users')
    .where({ id })
    .returning('description')
    .update({ description });
  return descUserUpdate;
};

module.exports = { description };
