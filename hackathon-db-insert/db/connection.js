const Sequelize = require('sequelize');

const env = 'development';
const config = require(__dirname + '/../db/config.json')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

module.exports = sequelize;
