const bcrypt = require('bcrypt');

module.exports = {
  Mutation: {
    register: async (_, { input }, { knex }) => {
      if (
        !(await knex('users').first('email').where({
          email: input.email,
        }))
      ) {
        const [user] = await knex('users').insert(
          {
            email: input.email,
            username: input.username,
            password: await bcrypt.hash(input.confirmPassword, 10),
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
