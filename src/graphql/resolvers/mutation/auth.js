const bcrypt = require('bcrypt');

const auth = async (_, { email, password }, { knex }) => {
  const userAuth = await knex('users').first('password').where({
    email,
  });
  const hashedPassword = await bcrypt.compare(password, userAuth.password);
  if (hashedPassword) {
    return await knex('users')
      .first(
        'id',
        'email',
        'username',
        'role',
        'avatar',
        'created_at',
        'description',
      )
      .where({ email });
  }
};

module.exports = { auth };
