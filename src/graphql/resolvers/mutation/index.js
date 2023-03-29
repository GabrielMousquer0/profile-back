const auth = async (_, { password, email }, { knex }) => {
  let [verify] = await knex('users').where({
    password: password,
    email: email,
  });
  return verify;
};

module.exports = {
  auth,
};
