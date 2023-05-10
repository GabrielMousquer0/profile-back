const bcrypt = require('bcrypt');

module.exports = {
  Mutation: {
    editUser: async (_, { input, id }, { knex }) => {
      const [userUpdate] = await knex('users')
        .where({ id })
        .update(input, ['id', 'username', 'email', 'avatar']);
      return userUpdate;
    },
    editPassword: async (_, { input, id }, { knex }) => {
      const userPassword = await knex('users').where({ id }).first('password');
      if (await bcrypt.compare(input.current, userPassword.password)) {
        return;
      }
      const [passwordUpdate] = await knex('users')
        .where({ id })
        .update({ password: await bcrypt.hash(`123`, 10) }, [
          'id',
          'username',
          'email',
          'avatar',
        ]);
      return passwordUpdate;
    },
  },
};
