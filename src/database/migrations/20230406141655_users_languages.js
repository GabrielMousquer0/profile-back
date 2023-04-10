exports.up = function (knex) {
  return knex.schema.createTable('users_languages', function (table) {
    table.integer('user').unsigned();
    table.foreign('user').references('users.id').deferrable('deferred');
    table.integer('language').unsigned();
    table.foreign('language').references('languages.id').deferrable('deferred');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users_languages');
};
