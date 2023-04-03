const auth = async (_, { email, password }, { knex, bcrypt }) => {
  const userAuth = await knex('users')
    .first('id', 'email', 'password', 'username', 'role', 'avatar')
    .where({
      email,
    });
  const hashedPassword = await bcrypt.compare(password, userAuth.password);
  if (hashedPassword) {
    return userAuth;
  }
};

module.exports = { auth };
