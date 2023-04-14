const knex = require('../../database/');
const bcrypt = require('bcrypt');

const context = () => {
  return {
    knex,
    bcrypt,
  };
};

module.exports = { context };
