const bcrypt = require('bcrypt');

module.exports = {
  Mutation: {
    editUser: async (_, { input, id }, { knex }) => {
      const [userUpdate] = await knex('users')
        .where({ id })
        .update(input, ['id', 'username', 'email', 'avatar']);
      return userUpdate;
    },
    editPassword: async (_, { password, id }, { knex }) => {
      const [passwordUpdate] = await knex('users')
        .where({ id })
        .update({ password: await bcrypt.hash(password, 10) }, [
          'id',
          'username',
          'email',
          'avatar',
        ]);
      return passwordUpdate;
    },
  },
};
