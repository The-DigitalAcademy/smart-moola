const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config')


const IndebtQ = sequelize.define('IndebtQ', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    scenarios: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    question: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    mutliplechoice1: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    mutliplechoice2: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    mutliplechoice3: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
   
});

module.exports = IndebtQ;