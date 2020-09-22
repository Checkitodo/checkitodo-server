const Sequelize = require('sequelize')
const { sequelize } = require('../app')

module.exports = sequelize.define('Todo', {
	id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
	},

	title: {
		type: Sequelize.STRING,
		allowNull: false,
	},

	dueDate: Sequelize.DATEONLY,

	dueTime: Sequelize.TIME,
})
