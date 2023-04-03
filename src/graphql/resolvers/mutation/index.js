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

const edit = async (
  _,
  { id, avatar, username, email, password },
  { knex, bcrypt },
) => {
  const hash = await bcrypt.hash(password, 10);
  const [test] = await knex('users')
    .where({ id })
    .returning(['avatar', 'username', 'email', 'password', 'id'])
    .update({ avatar, username, email, password: hash });
  return test;
};

module.exports = {
  auth,
  register,
  edit,
};
