const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config'); // Import the Sequelize instance

const QnA = sequelize.define('QnA', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    question: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    answer: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
   
});

// Create the table if it doesn't exist
QnA.sync({ force: true })
    .then(() => {
        console.log('QnA table created successfully.');
    })
    .catch((err) => {
        console.error('Error creating Users table:', err);
    });

module.exports = QnA;
