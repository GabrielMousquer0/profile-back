const bcrypt = require('bcrypt');
const register = async (_, { email, username, password }, { knex }) => {
  if (
    !(await knex('users').first('email').where({
      email,
    }))
  ) {
    await knex('users').insert({
      username,
      email,
      password: await bcrypt.hash(password, 10),
    });
    return false;
  }
  return true;
};

module.exports = { register };
