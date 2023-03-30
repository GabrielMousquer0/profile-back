const auth = async (_, { password, email }, { knex }) => {
  return await knex('users').first('id', 'email', 'password').where({
    email,
    password,
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

module.exports = {
  auth,
  register,
};
