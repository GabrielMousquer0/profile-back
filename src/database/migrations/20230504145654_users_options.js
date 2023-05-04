exports.up = function (knex) {
  return knex.schema.createTable('users_options', function (table) {
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('users.id').deferrable('deferred');
    table.boolean('description').defaultTo(true);
    table.boolean('role').defaultTo(true);
    table.boolean('created_at').defaultTo(true);
    table.boolean('languages').defaultTo(true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users_options');
};
