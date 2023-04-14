const editEmail = async (_, { email, id }, { knex }) => {
  const [emailUpdate] = await knex('users')
    .where({ id })
    .returning('email')
    .update({ email });
  return emailUpdate;
};
const editUsername = async (_, { username, id }, { knex }) => {
  const [usernameUpdate] = await knex('users')
    .where({ id })
    .returning('username')
    .update({ username });
  return usernameUpdate;
};
const editPassword = async (_, { password, id }, { knex, bcrypt }) => {
  const passwordHashUpdate = await bcrypt.hash(password, 10);
  const [passwordUpdate] = await knex('users')
    .where({ id })
    .returning('password')
    .update({ password: passwordHashUpdate });
  return passwordUpdate;
};
const editAvatar = async (_, { avatar, id }, { knex }) => {
  const [avatarUpdate] = await knex('users')
    .where({ id })
    .returning('avatar')
    .update({ avatar });
  return avatarUpdate;
};

module.exports = {
  editEmail,
  editPassword,
  editUsername,
  editAvatar,
};
