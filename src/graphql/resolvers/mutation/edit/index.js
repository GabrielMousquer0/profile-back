const editEmail = async (_, { email, id }, { knex }) => {
  const [emailUpdate] = await knex('users')
    .where({ id })
    .returning('email')
    .update({ email });
  console.log(emailUpdate);
  return emailUpdate;
};
const editUsername = async (_, { username, id }, { knex }) => {
  const [usernameUpdate] = await knex('users')
    .where({ id })
    .returning('username')
    .update({ username });
  console.log(usernameUpdate);
  return usernameUpdate;
};
const editPassword = async (_, { password, id }, { knex, bcrypt }) => {
  const passwordHashUpdate = await bcrypt.hash(password, 10);
  const [passwordUpdate] = await knex('users')
    .where({ id })
    .returning('password')
    .update({ password: passwordHashUpdate });
  console.log(passwordUpdate);
  return passwordUpdate;
};

module.exports = {
  editEmail,
  editPassword,
  editUsername,
};
