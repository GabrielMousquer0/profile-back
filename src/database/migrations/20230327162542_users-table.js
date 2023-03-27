/*eslint-disable*/
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('username', 20).notNullable()
    table.string('email').notNullable()
    table.string('password').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.string('role').defaultTo(null)
  })
};
exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
