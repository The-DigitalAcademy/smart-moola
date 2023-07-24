// Express Application setup
const express = require("express");
const cors = require("cors");
require("./config/db.config")

// Running Express Application 
const app = express();

const users = require("./routes/user.routes");

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/', users);

const PORT = 4545;

console.log(process.env.PGUSER, process.env.PGHOST, process.env.PGDATABASE, process.env.PGPASSWORD, process.env.PGPORT);

app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
})

console.log(process.env.PGUSER, process.env.PGHOST, process.env.PGDATABASE, process.env.PGPASSWORD, process.env.PGPORT);
