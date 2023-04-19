const bcrypt = require('bcrypt');

module.exports = {
  Mutation: {
    editEmail: async (_, { email, id }, { knex }) => {
      const [emailUpdate] = await knex('users')
        .where({ id })
        .returning('email')
        .update({ email });
      return emailUpdate;
    },
    editUsername: async (_, { username, id }, { knex }) => {
      const [usernameUpdate] = await knex('users')
        .where({ id })
        .returning('username')
        .update({ username });
      return usernameUpdate;
    },
    editPassword: async (_, { password, id }, { knex }) => {
      const passwordHashUpdate = await bcrypt.hash(password, 10);
      const [passwordUpdate] = await knex('users')
        .where({ id })
        .update({ password: passwordHashUpdate })
        .returning('username', 'email');
      return passwordUpdate;
    },
    editAvatar: async (_, { avatar, id }, { knex }) => {
      const [avatarUpdate] = await knex('users')
        .where({ id })
        .returning('avatar')
        .update({ avatar });
      return avatarUpdate;
    },
  },
};
