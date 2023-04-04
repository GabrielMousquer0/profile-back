const { auth } = require('./auth');
const { editEmail, editPassword, editUsername, editAvatar } = require('./edit');
const { register } = require('./register');

module.exports = {
  auth,
  register,
  editEmail,
  editPassword,
  editUsername,
  editAvatar,
};
