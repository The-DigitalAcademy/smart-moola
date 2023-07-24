require("dotenv").config();

const { Pool } = require("pg");

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
});

// Connect to the PostgreSQL database
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
