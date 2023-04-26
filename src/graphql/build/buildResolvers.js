const { join } = require('path');
const { mergeResolvers } = require('@graphql-tools/merge');
const { loadFilesSync } = require('@graphql-tools/load-files');

const resolverFiles = loadFilesSync(join(__dirname, '../resolvers/**/*.js'));
const resolvers = mergeResolvers(resolverFiles);

module.exports = { resolvers };
