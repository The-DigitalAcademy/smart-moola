// Express Application setup
const express = require("express");
const cors = require("cors");
require("./config/db.config")
const sequelize = require("./config/db.config");

// Running Express Application 
const app = express();

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const users = require("./routes/user.routes");
app.use("/api/users", users);

const PORT = 4545;

app.get('/', (req, res) => {
  res.json({"name": "Smart Moola"})
})

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error synchronizing the database:', err);
  });
