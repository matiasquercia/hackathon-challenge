const Sequelize = require("sequelize");
const sequelize = require("../db/connection");


const Hackathon = sequelize.define("hackathon", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false
  },
  name: {
		type: Sequelize.STRING,
		allowNull: true
	},
  location: {
    type: Sequelize.STRING,
    allowNull: true
	},
});

module.exports = Hackathon;
