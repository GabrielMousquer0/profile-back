const register = async (_, { email, username, password }, { knex, bcrypt }) => {
  let verify = await knex('users').first('email').where({
    email,
  });
  if (!verify) {
    const hashPassword = await bcrypt.hash(password, 10);
    await knex('users').insert({ username, email, password: hashPassword });
    return false;
  }
  return true;
};

module.exports = { register };
