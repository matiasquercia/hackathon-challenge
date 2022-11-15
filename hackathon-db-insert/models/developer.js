const Sequelize = require('sequelize');
const sequelize = require('../db/connection');

const Developer = sequelize.define("developer", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false
  },
  id_hackathon: {
    type: Sequelize.STRING,
    allowNull: true
  },
	firstName: {
		type: Sequelize.STRING,
		allowNull: false,
	},
  lastName: {
    type: Sequelize.STRING,
		allowNull: false,
  },
	age: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	phone: {
		type: Sequelize.STRING,
		allowNull: true
	},
    picture: {
		type: Sequelize.STRING,
		allowNull: true
	},
    city: {
		type: Sequelize.STRING,
		allowNull: true
	},
  email: {
		type: Sequelize.STRING,
		allowNull: true
	},
  nat: {
		type: Sequelize.STRING,
		allowNull: true
	},
  ranking: {
    type: Sequelize.INTEGER,
		allowNull: true
  }
});

module.exports = Developer;