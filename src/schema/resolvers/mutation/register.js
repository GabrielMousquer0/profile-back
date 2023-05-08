const bcrypt = require('bcrypt');

module.exports = {
  Mutation: {
    register: async (_, { input }, { knex }) => {
      return knex
        .transaction(async (trx) => {
          if (
            !(await trx('users').first('email').where({
              email: input.email,
            }))
          ) {
            const [user] = await trx('users').insert(
              {
                email: input.email,
                username: input.username,
                password: await bcrypt.hash(input.confirmPassword, 10),
              },
              ['id'],
            );
            await trx('users_options').insert({
              user_id: user.id,
              description: true,
              role: true,
              created_at: true,
              languages: true,
            });
            return true;
          }
          return false;
        })
        .then((result) => {
          return result;
        })
        .catch((error) => {
          console.log(error);
          return { error };
        });
    },
  },
};
