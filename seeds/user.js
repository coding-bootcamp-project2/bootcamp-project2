const { User } = require('../models'); // placeholder route

const userData = [
  {
    id: 1,
    user_name: '',
    password: '',
  },
];

const userLogin = () => User.bulkCreate(userData);

module.exports = userLogin;