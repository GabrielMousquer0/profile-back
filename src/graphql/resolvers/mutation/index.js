const auth = async (_, { email }, { knex }) => {
  return await knex('users')
    .first('id', 'email', 'password', 'username', 'role', 'avatar')
    .where({
      email,
    });
};

const register = async (_, args, { knex }) => {
  let verify = await knex('users').first('email').where({
    email: args.email,
  });
  if (!verify) {
    await knex('users').insert(args);
    return false;
  }
  return true;
};

const edit = async (_, { id, avatar, username, email, password }, { knex }) => {
  let [test] = await knex('users')
    .where({ id })
    .update({ avatar, username, email, password }, [
      'avatar',
      'username',
      'email',
      'password',
      'role',
      'id',
      'created_at',
    ]);
  return test;
};

module.exports = {
  auth,
  register,
  edit,
};
