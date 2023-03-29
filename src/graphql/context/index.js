const knex = require('../../database/index.js');

const context = () => {
  return {
    knex,
  };
};

module.exports = { context };
