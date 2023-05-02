exports.up = function (knex) {
  return knex.schema.createTable('languages', function (table) {
    table.increments('id').primary();
    table.string('name');
    table.string('icon');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('languages');
};
