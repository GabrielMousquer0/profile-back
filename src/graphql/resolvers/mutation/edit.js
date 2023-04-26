const bcrypt = require('bcrypt');

module.exports = {
  Mutation: {
    editEmail: async (_, { email, id }, { knex }) => {
      const [emailUpdate] = await knex('users')
        .where({ id })
        .returning(['email', 'id'])
        .update({ email });
      return emailUpdate;
    },
    editUsername: async (_, { username, id }, { knex }) => {
      const [usernameUpdate] = await knex('users')
        .where({ id })
        .returning(['username', 'id'])
        .update({ username });
      return usernameUpdate;
    },
    editPassword: async (obj, { password, id }, { knex }) => {
      const passwordHashUpdate = await bcrypt.hash(password, 10);
      const [passwordUpdate] = await knex('users')
        .where({ id })
        .update({ password: passwordHashUpdate })
        .returning(['username', 'email', 'id']);
      return passwordUpdate;
    },
    editAvatar: async (_, { avatar, id }, { knex }) => {
      const [avatarUpdate] = await knex('users')
        .where({ id })
        .returning(['avatar', 'id'])
        .update({ avatar });
      return avatarUpdate;
    },
  },
};
