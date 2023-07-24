// db.config.js
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
});

pool.connect((err, client, release) => {
    if (err) {
        console.error("Error acquiring client", err.stack);
        return;
    }

    // Perform a simple query to check the connection
    client.query("SELECT NOW()", (err, result) => {
        release();
        if (err) {
            console.error("Error executing query", err.stack);
            return;
        }

        console.log("Connected to the PostgreSQL database:", result.rows[0].now);
    });
});

module.exports = pool;
