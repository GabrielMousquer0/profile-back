const bcrypt = require('bcrypt');

module.exports = {
  Mutation: {
    editUser: async (_, { input, id }, { knex }) => {
      return knex
        .transaction(async (trx) => {
          const [userUpdate] = await trx('users')
            .where({ id })
            .update(input, ['id', 'username', 'email', 'avatar']);
          return userUpdate;
        })
        .then((result) => {
          return result;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    editPassword: async (_, { password, id }, { knex }) => {
      return knex
        .transaction(async (trx) => {
          const [passwordUpdate] = await trx('users')
            .where({ id })
            .update({ password: await bcrypt.hash(password, 10) }, [
              'id',
              'username',
              'email',
              'avatar',
            ]);
          return passwordUpdate;
        })
        .then((result) => {
          return result;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
