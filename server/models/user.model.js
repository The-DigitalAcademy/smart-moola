const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config'); // Import the Sequelize instance

const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    confirmPassword: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// Create the table if it doesn't exist
User.sync({ force: true })
    .then(() => {
        console.log('Users table created successfully.');
    })
    .catch((err) => {
        console.error('Error creating Users table:', err);
    });

module.exports = User;
