exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('username', 20).notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.string('role').notNullable().defaultTo('Simple');
    table
      .string('avatar')
      .defaultTo(
        'https://imgs.search.brave.com/IAtJtSNSIVSRMro9vXSxnc2FpSrB-ZeOLbZY9nhKJDc/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9ib29r/aW5nLnNpL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE4LzEyL2Rl/ZmF1bHRfYXZhdGFy/LTIwNDh4MjA0OC5w/bmc',
      );
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
