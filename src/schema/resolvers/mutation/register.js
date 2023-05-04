const bcrypt = require('bcrypt');

module.exports = {
  Mutation: {
    register: async (_, { email, username, password }, { knex }) => {
      if (
        !(await knex('users').first('email').where({
          email,
        }))
      ) {
        const [user] = await knex('users').insert(
          {
            username,
            email,
            password: await bcrypt.hash(password, 10),
          },
          ['id'],
        );
        await knex('users_options').insert({
          user_id: user.id,
          description: true,
          role: true,
          created_at: true,
          languages: true,
        });
        return false;
      }
      return true;
    },
  },
};
