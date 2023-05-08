const bcrypt = require('bcrypt');

module.exports = {
  Mutation: {
    auth: async (_, { email, password }, { knex }) => {
      knex
        .transaction(async (trx) => {
          const userAuth = await trx('users').first('password').where({
            email,
          });
          const hashedPassword = await bcrypt.compare(
            password,
            userAuth.password,
          );
          if (hashedPassword) {
            return await trx('users')
              .first('email', 'id', 'username')
              .where({ email });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
