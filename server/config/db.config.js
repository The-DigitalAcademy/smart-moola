// // db.config.js
// const { Sequelize } = require('sequelize');
// const { Pool } = require("pg");
// require("dotenv").config();

// const pool = new Pool({
//     user: process.env.POSTGRES_USER,
//     host: process.env.PGHOST,
//     database: process.env.PGDATABASE,
//     password: process.env.PGPASSWORD,
//     port: process.env.PGPORT,
// });

// pool.connect((err, client, release) => {
//     if (err) {
//         console.error("Error acquiring client", err.stack);
//         return;
//     }

//     // Perform a simple query to check the connection
//     client.query("SELECT NOW()", (err, result) => {
//         release();
//         if (err) {
//             console.error("Error executing query", err.stack);
//             return;
//         }

//         console.log("Connected to the PostgreSQL database:", result.rows[0].now);
//     });
// });

// module.exports = pool;

// db.config.js
const { Sequelize } = require('sequelize');
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  {
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    dialect: 'postgres',
    dialectOptions:{
      ssl: true,
    }
  }
);

// Perform a simple query to check the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to the PostgreSQL database');
  })
  .catch((err) => {
    console.error('Error connecting to the PostgreSQL database:', err);
  });

module.exports = sequelize;
