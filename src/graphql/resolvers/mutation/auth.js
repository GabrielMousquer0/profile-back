const bcrypt = require('bcrypt');

module.exports = {
  Mutation: {
    auth: async (_, { email, password }, { knex }) => {
      const userAuth = await knex('users').first('password').where({
        email,
      });
      const hashedPassword = await bcrypt.compare(password, userAuth.password);
      if (hashedPassword) {
        return await knex('users').first('id').where({ email });
      }
    },
  },
};
