const { resolvers } = require('./merge/resolvers');
const { typeDefs } = require('./merge/typeDefs');
const { mergeSchemas } = require('@graphql-tools/schema');

const schema = mergeSchemas({ typeDefs, resolvers });

module.exports = { schema };
